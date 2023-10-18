import { Request, RequestHandler, Response } from 'express';
import { User } from './users.model';


export const readUsers: RequestHandler =async (req:Request, res: Response) => 
{
    let newUser1: User = {
        userID: 1,
        firstName: "josh",
        lastName: "peck",
        email: "email.com",
        username: "josh",
        password: "peck",
    }
    let newUser2: User = {
        userID: 2,
        firstName: "josh",
        lastName: "peck",
        email: "email.com",
        username: "josh",
        password: "peck",
        cart: [
            {
                productId: 3,
                name: "muffin",
                calories: 23,
                ingredients: "flower",
                price: 23,
                qty: 3
            } 
        ]
    }
    let newUser3: User = {
        userID: 3,
        firstName: "josh",
        lastName: "peck",
        email: "email.com",
        username: "josh",
        password: "peck",
        cart: [
            {
                productId: 3,
                name: "muffin",
                calories: 23,
                ingredients: "flower",
                price: 23,
                qty: 3
            } 
        ]
    }
    const users = {
        newUser1,
        newUser2,
        newUser3
    };
    try{
        res.status(200).json(
            {
                users
            }
        );
    }
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
        res.status(200).json(
            req.body
        );
    }
    catch(error){
        console.error("users.controller|readUsersByUsernameAndPassword|ERROR", error);
        res.status(500).json({
            message:'there was an Error when reading a User'
        });
    }
}

export const createUser: RequestHandler =async (req:Request, res: Response) => 
{
    try{
        res.status(200).json(
            req.body
        );
    }
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
        res.status(200).json(
            req.body
        );
    }
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
        res.status(200).json(
            req.params.userID
        );
    }
    catch(error){
        console.error("users.controller|delete|ERROR", error);
        res.status(500).json({
            message:'there was an Error when Deleting User'
        });
    }
}

