import { getPool } from "../database/connection";
const sql = require("mssql");


const GetTipoEstructura = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const estructuraResult = await pool.request()
          .execute('[dbo].[GET_ESTRUCTURAMOLESTA]');
          console.log("get:"+estructuraResult);
  return new Promise((resolve, reject) => {
      resolve(estructuraResult)
  })
}


export const methods =
{
  GetTipoEstructura
}