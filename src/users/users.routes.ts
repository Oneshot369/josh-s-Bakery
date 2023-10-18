import { Request, Response, Router } from 'express';
import * as UserController from "./users.controller";

const router = Router();
//get all users
router
    .route('/users')
    .get(UserController.readUsers);
//get one user
router
    .route('/users/search/:username/:password')
    .get(UserController.readUsersByUsernameAndPassword);
//create user
router
    .route('/users')
    .post(UserController.readUsersByUsernameAndPassword);
//update user
router
    .route('/users/:username/:password')
    .put(UserController.readUsersByUsernameAndPassword);
// delete user
router
    .route('/users/:username/:password')
    .delete(UserController.readUsersByUsernameAndPassword);
export default router;