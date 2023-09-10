import { getPool } from "../database/connection";
const sql = require("mssql");


const GetEnfermedades = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const enfermedadResult = await pool.request()
          .execute('[dbo].[GET_ENFERMEDADES]');
          console.log("get:"+enfermedadResult);
  return new Promise((resolve, reject) => {
      resolve(enfermedadResult)
  })
}


export const methods =
{
  GetEnfermedades
}