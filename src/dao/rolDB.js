import { getPool } from "../database/connection";
const sql = require("mssql");


const GetRol = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const rolResult = await pool.request()
          .execute('[dbo].[GET_ROL]');
          console.log("get:"+rolResult);
  return new Promise((resolve, reject) => {
      resolve(rolResult)
  })
}


export const methods =
{
  GetRol
}