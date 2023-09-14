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

const GetFincaEpl = async (idEmpleado) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const FincaEplResult = await pool.request()
          .input('idEmpleado', sql.Int, idEmpleado)
          .execute('[dbo].[GET_FINCA_EPL]');
          console.log("get:"+FincaEplResult);
  return new Promise((resolve, reject) => {
      resolve(FincaEplResult)
  })
}
export const methods =
{
  GetFinca,
  GetFincaEpl
}