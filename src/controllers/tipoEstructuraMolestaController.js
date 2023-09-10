//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as tipoEstructuraMolestaBL } from "../bussiness/tipoEstructuraMolestaBL.js";
const routes = express.Router();



routes.get("/estructura", (req, res) => {
  console.log("entro al controller");
  tipoEstructuraMolestaBL.getTipoEstructura()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
