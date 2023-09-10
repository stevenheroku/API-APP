//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as fincaBL } from "../bussiness/fincaBL.js";
const routes = express.Router();



routes.get("/finca", (req, res) => {
  console.log("entro al controller");
  fincaBL.getFinca()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
