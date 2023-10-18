import express, { Request, Response } from 'express';

import logger from './middleware/logger.middleware';
import usersRoute from './users/users.routes';
import productRoute from './products/products.routes';

import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//enable all CORS request
// needs to be installed:
//npm install cors
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse ORL-encoded bodies
app.use(express.urlencoded({extended: true}));

//adding set of security middleware
//needs to be installed:
//npm install helmet
app.use(helmet());

console.log(process.env.My_SQL_DB_HOST)

if(process.env.NODE_ENV == 'development'){
    app.use(logger);
    console.log(process.env.NODE_ENV + ' in dev mode')
}

app.get('/', (req: Request, res: Response) => {   // this is what we imported (Request, Response)

    // this is the actual request that is sent
    res.send('<h1>Josh\'s Bakery <h1/>');
});

//this is middleware
app.use('/', [usersRoute, productRoute]);

app.listen(port, () => {
    //this is just logging the port to the console
    console.log(`Example app listening at http://localhost:${port}`)
});
