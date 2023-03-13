import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))

const Username = process.env.Db_username;
const Pass = process.env.Db_password;
Connection(Username, Pass);