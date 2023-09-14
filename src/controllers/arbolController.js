//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as arbolBL } from "../bussiness/arbolBL.js";
const routes = express.Router();



routes.get("/arbol/:idLote", (req, res) => {
  let idLote = req.params['idLote'];

  console.log("entro al controller");
  arbolBL.searchArbol(idLote)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/arbolPlagas/:idArbol", (req, res) => {
  let idArbol = req.params['idArbol'];

  console.log("entro al controller");
  arbolBL.searchArbolPlagas(idArbol)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});
routes.get("/arbolEnfermedades/:idArbol", (req, res) => {
  let idArbol = req.params['idArbol'];

  console.log("entro al controller");
  arbolBL.searchArbolEnfermedades(idArbol)
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
    let arbol = req.body;
    arbol.operacion = 1;
    console.log(req.body);
    // Verifica si los datos están presentes en req.body

    const result = await arbolBL.insertArbol(arbol);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

routes.post("/newArbolControl", async (req, res) => {
  try {
    let arbol = req.body;
    arbol.operacion = 1;
    console.log(req.body);
    // Verifica si los datos están presentes en req.body

    const result = await arbolBL.insertArbolControl(arbol);

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

routes.delete('/deleteArbol/:idEmpleado/:idArbol', (req, res) => {
    let idLote = req.params['idArbol'];
    let idEmpleado = req.params['idEmpleado'];
    console.log("entro controller");
    console.log("idArbol:"+idLote);
    arbolBL.deleteArbol(idEmpleado,idLote).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})


module.exports = routes;
