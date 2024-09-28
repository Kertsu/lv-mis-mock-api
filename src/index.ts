import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import { awakeServer } from "./jobs";
import { collegeStudentRouter } from "./routes";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: [process.env.APP_DEV_URL!, process.env.APP_PROD_URL!],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(compression())

// routers
app.use('/college', collegeStudentRouter);

// to prevent render hosting server termination
app.get('/', (req, res) => { res.send("Hello Server!") });
awakeServer();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is now listening to port ${PORT}.`));