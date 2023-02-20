import { promises as fs } from "fs";
import * as url from 'url';

export default async function migration(client) {
  const query = `
    CREATE TABLE public.universities (
      id UUID NOT NULL default public.uuid_generate_v4(),
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

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const dormitories = url.fileURLToPath(new URL("../../backend/ros-data/dormitories.json", import.meta.url));
    const json = await fs.readFile(dormitories, "utf8");
    const file = JSON.parse(json);

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
