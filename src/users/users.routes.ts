import { Request, Response, Router } from 'express';
import * as UserController from "./users.controller";

const router = Router();
//get all users
router
    .route('/users')
    .get(UserController.readUsers);
//get one user
router
    .route('/users/search')
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
export default router;