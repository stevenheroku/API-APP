import express from "express";
import config from "./config";
import morgan from "morgan";

//Routes
import languageRouter from "./routes/language.route";

const app = express();

//settings

let port;
app.set('port',config.port);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes

app.use("/",languageRouter);

export default app