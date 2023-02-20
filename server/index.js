import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import router from "./routes/route.js";

dotenv.config();

const app = express();
app.use('/', router);

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))

const Username = process.env.Db_username;
const Pass = process.env.Db_password;
Connection(Username, Pass);