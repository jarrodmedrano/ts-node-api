import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';

//import routers

// Server class
export default class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        //set up mongoose
        const MONGO_URI = 'mongodb://localhost/test';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI)
    }

    routes() {

    }
}