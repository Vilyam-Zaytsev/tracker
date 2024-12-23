import express, {Request, Response} from "express";
import {SETTINGS} from "./settings";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res
        .status(SETTINGS.HTTP_STATUSES.OK_200)
        .json({version: '1.0'});
});

app.use(SETTINGS.PATH.USERS);
app.use(SETTINGS.PATH.WORKERS);
app.use(SETTINGS.PATH.COMPANIES);

export {app};