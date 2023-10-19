import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from './users.queries';
import { Product } from "../products/products.model";

export const readAllUsers = async () => {
    return execute<User[]>(userQueries.readAllUsers, []);
};

export const readByIdUsers = async (userId: string) => {
    return execute<User[]>(userQueries.readUsersByID, [userId]);
};

export const searchForUser =async (username: string, password: string) => {
    return execute<User[]>(userQueries.searchForUser, [username, password])
}

export const createUser =async (reqBody: User) => {
    return execute<OkPacket>(userQueries.createNewUser, [
        reqBody.firstName,
        reqBody.lastName,
        reqBody.email,
        reqBody.username,
        reqBody.password 
    ]);
}

export const updateUser =async (reqBody: User) => {
    return execute<OkPacket>(userQueries.updateExistingUser, [
        reqBody.firstName,
        reqBody.lastName,
        reqBody.email,
        reqBody.username,
        reqBody.password,
        reqBody.ID 
    ]);
}
export const deleteUser =async (productID: string) => {
    return execute<OkPacket>(userQueries.deleteUser, [
        productID 
    ]);
}

export const getCart =async (productID: string) => {
    return execute<Product[]>(userQueries.getCart, [
        productID 
    ]);
}


