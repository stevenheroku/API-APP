const express = require('express')
const app = express()
import config from "../src/config.js";
import morgan from "morgan";
const cors = require('cors')

//Routes
import languageRouter from "./routes/language.route";
import lotesRouter from "../src/controllers/loteController.js";
import arbolesRouter from "../src/controllers/arbolController.js";
import loginRouter from "../src/controllers/loginController.js";
import fincaRouter from "../src/controllers/fincaController.js";
import estacionRouter from "../src/controllers/estacionesController.js";
import tipoControlRouter from "../src/controllers/tipoControlController.js";
import rolRouter from "../src/controllers/rolController.js";
import estructuraMolestaRouter from "../src/controllers/tipoEstructuraMolestaController.js";
import plagasRouter from "../src/controllers/plagasController.js";
import enfermedadesRouter from "../src/controllers/enfermedadesController.js";

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
app.use("/login",loginRouter);
app.use("/fincas",fincaRouter);
app.use("/estaciones",estacionRouter);
app.use("/tipocontroles",tipoControlRouter);
app.use("/roles",rolRouter);
app.use("/estructuras",estructuraMolestaRouter);
app.use("/plagas",plagasRouter);
app.use("/enfermedades",enfermedadesRouter);


export default app