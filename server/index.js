import express from 'express';
import mongoose from 'mongoose';
import router from './routes/api.js';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {
    MAX_JSON_SIZE, MONGODB_CONNECTION,
    PORT,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
    URL_ENCODED,
    WEB_CACHE
} from "./app/config/config.js";
import rateLimit from "express-rate-limit";

const app = express();


//Security application
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());


// Request size limitations
app.use(express.json({limit: MAX_JSON_SIZE }));
//URL Encode
app.use(express.urlencoded({ extended: URL_ENCODED }));


// Request rate limit
const limiter = rateLimit({windowMs: REQUEST_LIMIT_TIME,max: REQUEST_LIMIT_NUMBER})
app.use(limiter)


//Web cache
app.set('etag', WEB_CACHE)


// MongoDB connection
// mongoose.connect(MONGODB_CONNECTION,{autoReconnect: true})
//     .then(()=> {
//
//         console.log('Connected to MongoDB');
//     }).catch((error=> console.log("Database error",error)))


// Add app router
app.use("/api", router)




//App run
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));