import { Product } from "../products/products.model";

export interface User{
    ID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Username: string;
    Password: string;
    Cart?: Product[];
}