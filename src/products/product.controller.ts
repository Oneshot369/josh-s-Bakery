import { Request, RequestHandler, Response } from 'express';
import { Product } from './products.model';


export const readAllProducts: RequestHandler =async (req:Request, res: Response) => 
{
    let testProduct: Product = {
        productId: 1,
        name: 'cake',
        calories: 2000,
        ingredients: 'flower',
        price: 200,
        qty: 1
    }
    try{
        res.status(200).json(
            {
                testProduct
            }
        );
    }
    catch(error){
        console.error("products.controller|readAllProducts|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading all the Products'
        });
    }
}

export const searchProductsByName: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        res.status(200).json(
            req.params.search
        );
    }
    catch(error){
        console.error("products.controller|searchProductsByName|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading a Product'
        });
    }
}

export const createProduct: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        res.status(200).json(
            req.body
        );
    }
    catch(error){
        console.error("products.controller|createProduct|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Creating a Product'
        });
    }
}
export const updateProduct: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        res.status(200).json(
            req.body
        );
    }
    catch(error){
        console.error("product.controller|updateProduct|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Updating Product'
        });
    }
}

export const deleteProduct: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        res.status(200).json(
            req.params.productID
        );
    }
    catch(error){
        console.error("product.controller|deleteProduct|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Deleting the product'
        });
    }
}

