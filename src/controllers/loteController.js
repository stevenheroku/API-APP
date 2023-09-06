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

routes.get("/lote2", (req, res) => {
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
});

routes.post("/newLote", async (req, res) => {
  try {
    let lote = req.body;
    lote.operacion = 1;
    console.log(req.body);
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
    console.log(req.body);
    // Verifica si los datos están presentes en req.body

    const result = await loteBL.updatetLote(lote);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

routes.delete('/deleteLote/:idLote', (req, res) => {
    let idLote = req.params['idLote'];
    console.log("entro controller");
    console.log("idLote:"+idLote);
    loteBL.deleteLote(idLote).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})


//STORE PROCEDURE
const registerLote = async (req, res) => {
  try {
    const pool = await getPool();
    // Ejecutar el Stored Procedure
    const result = await pool
      .request()
      .input("pidLote", sql.Int, res)
      .execute("[dbo].[ADD_UPDATE_LOTE]");

    // Crear el objeto de respuesta estándar
    const response = {
      successful: true,
      status: 200,
    };

    res.status(200).json(response);
  } catch (error) {
    const response = {
      successful: false,
      status: 500,
      error: error.message,
    };

    res.status(500).json(response);
  }
};

//obtener lote
const GetLote = async (req, res) => {
  try {
    const pool = await getPool();
    // Ejecutar el Stored Procedure
    const result = await pool
      .request()
      //.input('id', sql.Int, 1)
      .execute("[dbo].[GET_PARADAS_ARBOL]");

    // Crear el objeto de respuesta estándar
    const response = {
      successful: true,
      status: 200,
      data: result.recordset, // Suponiendo que la data que deseas retornar está en result.recordset
    };

    res.status(200).json(response);
  } catch (error) {
    const response = {
      successful: false,
      status: 500,
      error: error.message,
    };

    res.status(500).json(response);
  }
};

module.exports = routes;
