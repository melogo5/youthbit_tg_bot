import { promises as fs } from "fs";
import * as url from 'url';

export default async function migration(client) {

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const dormitories = url.fileURLToPath(new URL("../../backend/ros-data/dormitories.json", import.meta.url));
    const json = await fs.readFile(dormitories, "utf8");
    const file = JSON.parse(json);

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
