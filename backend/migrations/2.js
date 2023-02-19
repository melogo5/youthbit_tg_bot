import { promises as fs } from "fs";
export default async function migration(client) {
  const query = `
    CREATE SEQUENCE universities_id_seq;
    CREATE TABLE universities (
      id INT NOT NULL DEFAULT NEXTVAL('universities_id_seq'),
      userId text,
      universityId text,
      name text,
      photo text,
      district text,
      region text,
      committee text,
      shortName text,
      adminContacts text,
      city text,
      PRIMARY KEY ("id")
    );

  `;
    await client.query(query);

    const file = JSON.parse(await fs.readFile("./backend/ros-data/dormitories.json", "utf8"));
    console.log('file ')
    for (let i=0; i<file.length; i++) {
        const uni = file[i];
        
        const userId = uni['userId'];
        const universityId = uni['universityId'];
        const details = uni['details'];
        let city, name, district, adminContacts, committee, shortName, region, photo;
        city = name = district = adminContacts = committee = shortName = photo = region = '';
        
        if (details) {
            city = uni['details']['city'];
            region = uni['details']['region'];
            district = uni['details']['district'];
            name = uni['details']['name'];
            adminContacts= uni['details']['adminContacts'];
            committee = uni['details']['committee'];
            shortName = uni['details']['shortName'];
            photo = uni['details']['photo'];  
        }

        const uniQuery = `INSERT INTO universities(userId, universityId, city, name, region, district, adminContacts, committee, shortName, photo) VALUES('${userId}', '${universityId}', '${city}', '${name}', '${region}', '${district}', '${adminContacts}', '${committee}', '${shortName}', '${photo}') returning (id)`
        // console.log(uniQuery);
        await client.query(uniQuery)
    }
    
    await client.query(`INSERT INTO public.migrations (id) VALUES ('2');`);
    console.log`migration 2 created`;
}