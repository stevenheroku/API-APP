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
// Configurar opciones de CORS (ajusta esto según tus necesidades)
const corsOptions = {
    origin: 'https://192.168.1.9:4200', // Permitir solicitudes solo desde este origen
    methods: 'GET,PUT,POST,DELETE', // Métodos HTTP permitidos
  };
app.use(cors(corsOptions));
//app.use(cors())
//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes

app.use("/api/",languageRouter);
app.use("/api/lotes",lotesRouter);
app.use("/api/arboles",arbolesRouter);
app.use("/api/login",loginRouter);
app.use("/api/fincas",fincaRouter);
app.use("/api/estaciones",estacionRouter);
app.use("/api/tipocontroles",tipoControlRouter);
app.use("/api/roles",rolRouter);
app.use("/api/estructuras",estructuraMolestaRouter);
app.use("/api/plagas",plagasRouter);
app.use("/api/enfermedades",enfermedadesRouter);


export default app