import {ObjectId} from "mongodb";

type ObjectDbType = {
    _id: ObjectId,
    name: string,
    address: string,
    company: ObjectId,
    masters: ObjectId[]
};

export {ObjectDbType};