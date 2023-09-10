import { getPool } from "../database/connection";
const sql = require("mssql");


const GetEstaciones = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const FincaResult = await pool.request()
          .execute('[dbo].[GET_ESTACIONES]');
          console.log("get:"+FincaResult);
  return new Promise((resolve, reject) => {
      resolve(FincaResult)
  })
}


export const methods =
{
  GetEstaciones
}