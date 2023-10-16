//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as enfermedadesBL } from "../bussiness/enfermedadesBL.js";
const routes = express.Router();



routes.get("/enfermedad", (req, res) => {
  enfermedadesBL.getEnfermedades()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
