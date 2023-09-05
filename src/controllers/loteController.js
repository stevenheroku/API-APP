//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require('express')
import { methods as loteBL } from "../bussiness/loteBL.js";
const routes = express.Router()


//obtiene los lotes
const getLotes = async (req, res) => {

    console.log("entro al controller");
    loteBL.searchLotes().then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
};

//STORE PROCEDURE
const registerLote = async (req, res) => {
  try {
      const pool = await getPool();
      // Ejecutar el Stored Procedure
      const result = await pool.request()
          .input('pidLote', sql.Int, res)
          .execute('[dbo].[ADD_UPDATE_LOTE]');
      
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
          error: error.message
      };
      
      res.status(500).json(response);
  }
};

//obtener lote
const GetLote = async (req, res) => {
    try {
        const pool = await getPool();
        // Ejecutar el Stored Procedure
        const result = await pool.request()
            //.input('id', sql.Int, 1)
            .execute('[dbo].[GET_PARADAS_ARBOL]');
        
        // Crear el objeto de respuesta estándar
        const response = {
            successful: true,
            status: 200,
            data: result.recordset // Suponiendo que la data que deseas retornar está en result.recordset
        };
        
        res.status(200).json(response);
    } catch (error) {
        const response = {
            successful: false,
            status: 500,
            error: error.message
        };
        
        res.status(500).json(response);
    }
  };

export const methods =
{
    registerLote,
    getLotes
}
