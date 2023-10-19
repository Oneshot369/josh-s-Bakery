import { Request, RequestHandler, Response } from 'express';
import { Product } from './products.model';
import * as ProductsDAO from './products.dao'
import { OkPacket } from 'mysql';


export const readAllProducts: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        let albums = await  ProductsDAO.readAllProducts()
        res.status(200).json(
            albums
        );
    }
    catch(error){
        console.error("products.controller|readAllProducts|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading all the Products'
        });
    }
}

export const readByProductId: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        let albums = await  ProductsDAO.getProductByID(req.params.productID)
        res.status(200).json(
            albums
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
        let albums = await ProductsDAO.searchForProducts("%" + req.params.search + "%");
        res.status(200).json(
            albums
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
        const okPacket: OkPacket = await ProductsDAO.createProduct(req.body);
        console.log(okPacket);
        res.status(200).json(
            okPacket
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
        let p: Product = req.body;
        const okPacket: OkPacket = await ProductsDAO.updateProduct(p);
        console.log(okPacket);
        res.status(200).json(
            okPacket
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
        const okPacket: OkPacket = await ProductsDAO.deleteProduct(req.params.productID);
        console.log(okPacket);
        res.status(200).json(
            okPacket
        );
    }
    catch(error){
        console.error("product.controller|deleteProduct|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Deleting the product'
        });
    }
}
