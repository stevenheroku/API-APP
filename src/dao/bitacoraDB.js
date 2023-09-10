import { getPool } from "../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerBitacora = async (json,empleado) => {
    try {
      const pool = await getPool();
  
      //var base64Data = imagenLote.replace(/^data:image\/\w+;base64,/, '');

        // Decodificar la cadena Base64 en un arreglo de bytes
        //const buffer = Buffer.from(base64Data, 'base64');


      // Ejecutar el Stored Procedure con los valores extraídos
      const LoteResult = await pool.request()
        .input('Descripcion', sql.NVarChar, json)
        .input('IdEmpleado', sql.Int, empleado)
        .execute('[dbo].[ADD_BITACORA]');
  
      return LoteResult;
    } catch (error) {
      console.error('Error al registrar en bitacora!:', error);
      const response = {
        successful: false,
        status: 500,
        error: error.message
    };
    }
  }


export const methods =
{
  registerBitacora
}