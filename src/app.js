const express = require('express')
const app = express()
import config from "../src/config.js";
import morgan from "morgan";
const cors = require('cors')

//Routes
import languageRouter from "./routes/language.route";
import lotesRouter from "../src/controllers/loteController.js";
import arbolesRouter from "../src/controllers/arbolController.js";


//settings

let port;
app.set('port', config.port || 8016);

app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes

app.use("/",languageRouter);
app.use("/lotes",lotesRouter);
app.use("/arboles",arbolesRouter);


export default app