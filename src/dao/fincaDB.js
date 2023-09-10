import { getPool } from "../database/connection";
const sql = require("mssql");



//obtener Arbol
const GetFinca = async () => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const FincaResult = await pool.request()
            .execute('[dbo].[GET_FINCA]');
            console.log("get:"+FincaResult);
    return new Promise((resolve, reject) => {
        resolve(FincaResult)
    })
}

export const methods =
{
  GetFinca
}