import { promises as fs } from "fs";

export default async function migration(client) {
    const file = JSON.parse(await fs.readFile("./ros-data/dormitories.json", "utf8"));
    for (let i=0; i<file.length; i++) {
        const dorm = file[i];
        const details = dorm['details'];
        let photos = '';
        
        if (details) {
            const mainInfo = details['main-info'];
            if (mainInfo && mainInfo['photos']) {
                let photoArrayString = '';
                photoArrayString = mainInfo['photos'].join();
            }
        }
        const photoQuery = `INSERT INTO dormitories(photos) VALUES('${photos}') returning (id)`
        console.log(photoQuery);
        await client.query(photoQuery)
    }
    
    await client.query(`INSERT INTO public.migrations (id) VALUES ('3');`);
    console.log`migration 1 created`;
}