//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as rolBL } from "../bussiness/rolBL.js";
const routes = express.Router();



routes.get("/rol", (req, res) => {
  console.log("entro al controller");
  rolBL.getRol()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;
