import { Product } from "../products/products.model";

export interface User{
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    cart?: Product[];
}