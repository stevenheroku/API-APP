//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as arbolBL } from "../bussiness/arbolBL.js";
const routes = express.Router();



routes.get("/arbolLote/:idLote", (req, res) => {
  let idLote = req.params['idLote'];

  arbolBL.searchArbolLote(idLote)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/arbol/:idArbol", (req, res) => {
  let idLote = req.params['idArbol'];

  arbolBL.searchArbol(idLote)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});
routes.get("/arbolPlagas/:idArbol/:fecha", (req, res) => {
  let idArbol = req.params['idArbol'];
  let fecha = req.params['fecha'];

  arbolBL.searchArbolPlagas(idArbol,fecha)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


routes.get("/arbolEnfermedades/:idArbol/:fecha", (req, res) => {
  let idArbol = req.params['idArbol'];
  let fecha = req.params['fecha'];
  arbolBL.searchArbolEnfermedades(idArbol,fecha)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/arbolControlBitacora/:idArbol", (req, res) => {
  let idArbol = req.params['idArbol'];

  arbolBL.searchArbolBitacora(idArbol)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


routes.get("/arbolDetalle/:idArbol", (req, res) => {
  let idArbol = req.params['idArbol'];

  arbolBL.searchArbolDetalle(idArbol)
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
    arbolBL.deleteArbol(idEmpleado,idLote).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})


module.exports = routes;
