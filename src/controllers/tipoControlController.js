//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as tipoControlBL } from "../bussiness/tipoControlBL.js";
const routes = express.Router();



routes.get("/tipoControl", (req, res) => {
  console.log("entro al controller");
  tipoControlBL.getTipoControl()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
