//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as arbolBL } from "../bussiness/arbolBL.js";
const routes = express.Router();



routes.get("/arbol", (req, res) => {
  console.log("entro al controller");
  arbolBL.searchArbol()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.post("/newArbol", async (req, res) => {
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

routes.put("/updateArbol", async (req, res) => {
  try {
    let lote = req.body;
    lote.operacion = 2;
    console.log(req.body);
    // Verifica si los datos están presentes en req.body

    const result = await arbolBL.updatetArbol(lote);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

routes.delete('/deleteArbol/:idArbol', (req, res) => {
    let idLote = req.params['idArbol'];
    console.log("entro controller");
    console.log("idArbol:"+idLote);
    arbolBL.deleteArbol(idLote).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})


module.exports = routes;
