//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as loteBL } from "../bussiness/loteBL.js";
const routes = express.Router();

//obtiene los lotes
const getLotes = async (req, res) => {
  console.log("entro al controller");
  loteBL
    .searchLotes()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
};

routes.get("/lotefinca/:idFinca", (req, res) => {
  let idFinca = req.params['idFinca'];

  console.log("entro al controller");
  loteBL
    .searchLotesFinca(idFinca)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/lotefincaGrafica/:idFinca", (req, res) => {
  let idFinca = req.params['idFinca'];

  console.log("entro al controller");
  loteBL
    .searchLotesFincaGrafica(idFinca)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/lotefincaReporte/:idFinca", (req, res) => {
  let idFinca = req.params['idFinca'];

  console.log("entro al controller");
  loteBL
    .searchLotesFincaReporteBasico(idFinca)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.get("/lote/:idLote", (req, res) => {
  let idLote = req.params['idLote'];

  console.log("entro al controller");
  loteBL
    .searchLote(idLote)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});
routes.post("/newLote", async (req, res) => {
  try {
    let lote = req.body;
    lote.operacion = 1;
    // Verifica si los datos están presentes en req.body

    const result = await loteBL.insertLote(lote);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

routes.put("/updateLote", async (req, res) => {
  try {
    let lote = req.body;
    lote.operacion = 2;
    // Verifica si los datos están presentes en req.body

    const result = await loteBL.updatetLote(lote);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

routes.delete('/deleteLote/:idempleado/:idLote', (req, res) => {
    let idLote = req.params['idLote'];
    let idempleado = req.params['idempleado'];
    console.log("entro controller");
    console.log("idLote:"+idLote);
    loteBL.deleteLote(idempleado,idLote).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})


module.exports = routes;
