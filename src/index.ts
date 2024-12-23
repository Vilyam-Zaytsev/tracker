import {SETTINGS} from "./settings";
import {app} from "./app";
import {runDb} from "./db/mongoDb";

const startApp = async () => {
    const res: boolean = await runDb(SETTINGS.MONGO_URL);

    if (!res) process.exit(1);

    app.listen(SETTINGS.PORT, () => {
        console.log(`...server started in port ${SETTINGS.PORT}`);
    });
};

startApp();