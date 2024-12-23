import {ObjectId} from "mongodb";

type MasterDbType = {
    _id: ObjectId,
    user_id: ObjectId,
    company_id: ObjectId,
    objects_id: ObjectId[],
    salary: number
};

export {MasterDbType};