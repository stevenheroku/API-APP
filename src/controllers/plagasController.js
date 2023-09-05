import { getPool } from "./../database/connection";
const sql = require("mssql");
const lotesBL = require('../bussiness/loteBL.js')



//consultas directas
  const getPlagas2 = async(req,res) =>{
    try
    {
        const pool = await getPool();
      const result = await pool.request().query('SELECT * FROM Prueba.dbo.tablePersona');
      console.log(result);
      res.json(result)
     
    }catch(error)
    {
        res.status(500);
        res.send(error.message);
    }
    
};

//STORE PROCEDURE
const getPlagas3 = async (req, res) => {
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
const getPlagas4 = async (req, res) => {
    lotesBL.searchLotes().then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
  };

export const methods =
{
    getPlagas2,
    getPlagas3
}