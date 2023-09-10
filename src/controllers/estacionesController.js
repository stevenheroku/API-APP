//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as estacionesBL } from "../bussiness/estacionesBL.js";
const routes = express.Router();



routes.get("/estacion", (req, res) => {
  console.log("entro al controller");
  estacionesBL.getEstaciones()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
