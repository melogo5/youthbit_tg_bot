import { promises as fs } from "fs";

export default async function migration(client) {
    const query = `
    CREATE SEQUENCE dormitories_id_seq;
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
    await client.query(query);

    const file = JSON.parse(await fs.readFile("./ros-data/dormitories.json", "utf8"));
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
                city = dorm['details']['main-info']['city'];
                name = dorm['details']['main-info']['name'];
                maxDays = dorm['details']['main-info']['maxDays'];
                minDays = dorm['details']['main-info']['minDays'];
            }
        }

        const rooms = dorm['rooms'];

        let roomsArrayString = '';
        if (rooms) {
            console.log(rooms)
            for (const [key, value] of Object.entries(rooms)) {
                const room = rooms[key];
                console.log(key)
                const type = rooms[key]['details']['type'];
                const price = rooms[key]['details']['price'];
                const descr = rooms[key]['details']['description'].replaceAll('"', '*').replaceAll('\n',' ');
                const isFree = rooms[key]['details']['isFree'];
                const roomsString = `{"${key}", "${type}", "${price}", "${descr}", "${isFree}"}`;
                roomsArrayString += roomsString + ', ';
            }
            roomsArrayString = roomsArrayString.slice(0, -2)
        }
        const labQuery = `INSERT INTO dormitories(userId, universityId, city, name, maxDays, minDays, rooms) VALUES('${userId}', '${universityId}', '${city}', '${name}', '${maxDays}', '${minDays}', '{${roomsArrayString}}') returning (id)`
        console.log(labQuery);
        await client.query(labQuery)
    }
    
    // await client.query(`INSERT INTO public.migrations (id) VALUES ('1');`);
    console.log`migration 1 created`;
}