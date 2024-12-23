import {ObjectId} from "mongodb";

type CompanyDbType = {
    _id: ObjectId,
    name: string,
    owner_id: ObjectId,
    object_id: ObjectId[]
};

export {CompanyDbType};