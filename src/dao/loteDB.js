import { getPool } from "./../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerLote = async (req, res) => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const LoteResult = await pool.request()
            .input('id', sql.Int, 1)
            .execute('[dbo].[ADD_UPDATE_LOTES]');

    return new Promise((resolve, reject) => {
        resolve(LoteResult)
    })
};

//obtener lote
const GetLote2 = async () => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const LoteResult = await pool.request()
            //.input('id', sql.Int, 1)
            .execute('[dbo].[GET_PARADAS_ARBOL]');

    return new Promise((resolve, reject) => {
        resolve(LoteResult)
    })
}
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
        console.log(response);
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
    GetLote,
    GetLote2,
    registerLote
}