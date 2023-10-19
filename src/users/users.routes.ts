import { Request, Response, Router } from 'express';
import * as UserController from "./users.controller";

const router = Router();
//get all users
router
    .route('/users')
    .get(UserController.readUsers);
//get all users by user ID
router
    .route('/users/byID/:userID')
    .get(UserController.readUsersbyID);
//get one user by username and password
router
    .route('/users/login')
    .get(UserController.readUsersByUsernameAndPassword);
//create user
router
    .route('/users')
    .post(UserController.createUser);
//update user
router
    .route('/users')
    .put(UserController.updateUser);
// delete user
router
    .route('/users/:userID')
    .delete(UserController.deleteUser);
//Add to cart
router
    .route('/cart/:userID/:productID')
    .put(UserController.addToCart);
//remove from the cart    
router
    .route('/cart/:userID/:productID')
    .delete(UserController.removeFromCart);
export default router;