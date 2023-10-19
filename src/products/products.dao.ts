import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Product } from "./products.model";
import { productQueries } from './products.queries';

export const readAllProducts = async () => {
    return execute<Product[]>(productQueries.readAllProducts, []);
};


export const searchForProducts =async (searchTerm: string) => {
    return execute<Product[]>(productQueries.searchForProducts, [searchTerm])
}

export const createProduct =async (reqBody: Product) => {
    console.log(reqBody)
    return execute<OkPacket>(productQueries.createNewProduct, [
        reqBody.Name,
        reqBody.Calories,
        reqBody.Ingredients,
        reqBody.Price,
        reqBody.Qty 
    ]);
}

export const updateProduct =async (reqBody: Product) => {
    console.log(reqBody)
    return execute<OkPacket>(productQueries.updateExistingProduct, [
        reqBody.Name,
        reqBody.Calories,
        reqBody.Ingredients,
        reqBody.Price,
        reqBody.Qty,
        reqBody.ID 
    ]);
}
export const deleteProduct =async (productID: string) => {
    return execute<OkPacket>(productQueries.deleteProduct, [
        productID 
    ]);
}
export const getProductByID = async (productID: string) => {
    return execute<Product[]>(productQueries.readProductByID, [
        productID 
    ]);
}