import {ObjectId} from "mongodb";

enum RoleEnum {
    User = 'user',
    Master = 'master',
    CompanyOwner = 'companyOwner',
    Admin = 'admin'
}

type UserDbType = {
    _id: ObjectId,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: RoleEnum[]
};

export {
    UserDbType,
    RoleEnum
};