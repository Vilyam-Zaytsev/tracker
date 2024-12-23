import {ObjectId} from "mongodb";

type WorkLogDbType = {
    date: string,
    beginningWorkingDay: string,
    endingWorkingDay: string,
    numberHoursWorked: number,
    salaryCurrentDay: number
};

type MasterStatisticsDbType = {
    _id: ObjectId,
    master_id: ObjectId,
    workLogs: WorkLogDbType[]
};

export {
    MasterStatisticsDbType,
    WorkLogDbType
}