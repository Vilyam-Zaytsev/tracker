import {Collection, MongoClient} from "mongodb";
import {UserDbType} from "../types/db-types/user-db-type";
import {MasterDbType} from "../types/db-types/master-db-type";
import {MasterStatisticsDbType} from "../types/db-types/masterStatistics-db-type";
import {CompanyDbType} from "../types/db-types/company-db-type";
import {ObjectDbType} from "../types/db-types/object-db-type";
import {SETTINGS} from "../settings";

let userCollection: Collection<UserDbType>;
let masterCollection: Collection<MasterDbType>;
let masterStatisticsCollection: Collection<MasterStatisticsDbType>;
let companyCollection: Collection<CompanyDbType>;
let objectCollection: Collection<ObjectDbType>;

async function runDb(url: string) {
    let client: MongoClient = new MongoClient(url);
    let db = client.db(SETTINGS.DB_NAME);

    userCollection = db.collection<UserDbType>('users');
    masterCollection = db.collection<MasterDbType>('masters');
    masterStatisticsCollection = db.collection<MasterStatisticsDbType>('mastersStatistics');
    companyCollection = db.collection<CompanyDbType>('companies');
    objectCollection = db.collection<ObjectDbType>('objects');

    try {
        await client.connect();
        await db.command({ping: 1});

        console.log('connected to mongodb...');

        return true;
    } catch (error) {
        console.log(error);

        await client.close();

        return false;
    }
}

export {
    userCollection,
    masterCollection,
    masterStatisticsCollection,
    companyCollection,
    objectCollection,
    runDb
};