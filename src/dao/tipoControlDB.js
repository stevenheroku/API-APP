import { getPool } from "../database/connection";
const sql = require("mssql");


const GetTipoControl = async () => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const TipoControlResult = await pool.request()
          .execute('[dbo].[GET_TIPOCONTROL]');
          console.log("get:"+TipoControlResult);
  return new Promise((resolve, reject) => {
      resolve(TipoControlResult)
  })
}


export const methods =
{
  GetTipoControl
}