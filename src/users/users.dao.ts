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
    console.log(username)
    console.log(password)
    return execute<User[]>(userQueries.searchForUser, [username, password])
}

export const createUser =async (reqBody: User) => {
    return execute<OkPacket>(userQueries.createNewUser, [
        reqBody.FirstName,
        reqBody.LastName,
        reqBody.Email,
        reqBody.Username,
        reqBody.Password 
    ]);
}

export const updateUser =async (reqBody: User) => {
    return execute<OkPacket>(userQueries.updateExistingUser, [
        reqBody.FirstName,
        reqBody.LastName,
        reqBody.Email,
        reqBody.Username,
        reqBody.Password,
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

export const addToCart =async (userID: number, productID: number) => {
    return execute<OkPacket>(userQueries.addToCart, [
       userID,
       productID
    ]);
}
