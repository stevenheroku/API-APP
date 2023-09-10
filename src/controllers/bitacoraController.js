//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as arbolBL } from "../bussiness/bitacoraBL.js";
const routes = express.Router();




routes.post("/newBitacora", async (req, res) => {
  try {
    let lote = req.body;
    lote.operacion = 1;
    console.log(req.body);
    // Verifica si los datos están presentes en req.body

    const result = await arbolBL.insertArbol(lote);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});




module.exports = routes;
