import { promises as fs } from "fs";

export default async function migration(client) {
    // CREATE SEQUENCE dormitories_id_seq;
    const query = `
    CREATE TABLE dormitories (
      id INT NOT NULL DEFAULT NEXTVAL('dormitories_id_seq'),
      userId text,
      universityId text,
      name text,
      city text,
      street text,
      houseNumber text,
      minDays text,
      maxDays text,
      photos text,
      rules text,
      mealPlan text,
      rooms text[][],
      PRIMARY KEY ("id")
    );

  `;
    // await client.query(query);

    const file = JSON.parse(await fs.readFile("./backend/ros-data/dormitories.json", "utf8"));
    for (let i=0; i<file.length; i++) {
        const dorm = file[i];
        
        const userId = dorm['userId'];
        const universityId = dorm['universityId'];
        const details = dorm['details']
        let city, name, maxDays, minDays;
        city = name = maxDays = minDays = '';
        
        if (details) {
            const mainInfo = details['main-info']
            if (mainInfo) {
                city = mainInfo['city'];
                name = mainInfo['name'];
                maxDays = mainInfo['maxDays'];
                minDays = mainInfo['minDays'];
            }
        }

        const rooms = dorm['rooms'];

        let roomsArrayString = '';
        if (rooms) {
            console.log(rooms)
            for (const [key, room] of Object.entries(rooms)) {
                const type = room['details']['type'];
                const price = room['details']['price'];
                const descr = room['details']['description'].replaceAll('"', '*').replaceAll('\n',' ');
                const isFree = room['details']['isFree'];
                const roomsString = `{"${key}", "${type}", "${price}", "${descr}", "${isFree}"}`;
                roomsArrayString += roomsString + ', ';
            }
            roomsArrayString = roomsArrayString.slice(0, -2)
        }
        const labQuery = `INSERT INTO dormitories(userId, universityId, city, name, maxDays, minDays, rooms) VALUES('${userId}', '${universityId}', '${city}', '${name}', '${maxDays}', '${minDays}', '{${roomsArrayString}}') returning (id)`
        // console.log(labQuery);
        await client.query(labQuery)
    }
    
    await client.query(`INSERT INTO public.migrations (id) VALUES ('1');`);
    console.log`migration 1 created`;
}