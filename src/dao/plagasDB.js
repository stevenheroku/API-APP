import { getPool } from "../database/connection";
const sql = require("mssql");


const GetPlagas = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const plagasResult = await pool.request()
          .execute('[dbo].[GET_PLAGAS]');
          console.log("get:"+plagasResult);
  return new Promise((resolve, reject) => {
      resolve(plagasResult)
  })
}


export const methods =
{
  GetPlagas
}