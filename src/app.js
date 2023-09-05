const express = require('express')
const app = express()
import config from "../src/config.js";
import morgan from "morgan";
const cors = require('cors')

//Routes
import languageRouter from "./routes/language.route";


//settings

let port;
app.set('port', config.port || 8016);

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes

app.use("/",languageRouter);

export default app