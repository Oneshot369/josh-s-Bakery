import { Request, RequestHandler, Response } from 'express';
import { User } from './users.model';
import * as UserDAO from './users.dao';
import * as ProductDAO from '../products/products.dao';
import { Product } from '../products/products.model';


export const readUsers: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //read all the users
        let users = await UserDAO.readAllUsers();
        //also get the cart of the user
        await getCart(users, res);
        //send the results back
        res.status(200).json(
            {
                users
            }
        );
    }
    //catch error if something happens
    catch(error){
        console.error("users.controller|readUsers|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading all the Users'
        });
    }
}

export const readUsersByUsernameAndPassword: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        // get one user by username and password
        let user = await UserDAO.searchForUser(req.body.username, req.body.password);
        //also get the cart of the user
        await getCart(user, res);
        // return the user if there is one (nothing if there was not a match)
        res.status(200).json(
        {
            user
        }
        );
    }
    // catch error if one happens
    catch(error){
        console.error("users.controller|readUsersByUsernameAndPassword|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading a User'
        });
    }
}

export const createUser: RequestHandler =async (req:Request, res: Response) => 
{
    //create the user
    let result = await UserDAO.createUser(req.body);
    try{
        //sent the OkPacket back
        res.status(200).json(
            result
        );
    }
    //catch error is there is one
    catch(error){
        console.error("users.controller|createUser|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Creating User'
        });
    }
}

export const updateUser: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //update a user
        let result = UserDAO.updateUser(req.body);
        //return the OkPacket
        res.status(200).json(
            req.body
        );
    }
    //catch error if there is one
    catch(error){
        console.error("users.controller|updateUser|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Updating User'
        });
    }
}

export const deleteUser: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //delete one user
        let result = await UserDAO.deleteUser(req.params.userID)
        //return the OkPacket
        res.status(200).json(
            result
        );
    }
    catch(error){
        console.error("users.controller|delete|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Deleting User'
        });
    }
}

async function getCart(users: User[], res: Response<any, Record<string, any>>) 
{
    for (let i = 0; i < users.length; i++){
        try{
            console.log(users);
            const products = await UserDAO.getCart(users[i].ID.toString());
            users[i].cart = products;

        } catch (error){
            console.error('users.controller|getCart|ERROR', error);
            res.status(500).json({
                message: 'There was an error when fetching cart'
            });
        }
    }
} 

export const addToCart: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        //delete one user
        let result = await UserDAO.deleteUser(req.params.userID)
        //return the OkPacket
        res.status(200).json(
            result
        );
    }
    catch(error){
        console.error("users.controller|delete|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Deleting User'
        });
    }
}
