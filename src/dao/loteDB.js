import { getPool } from "./../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerLote = async (objectRegister) => {
    try {
      const pool = await getPool();
  
      // Extraer los valores del objeto JSON
      const {
        idLote,
        IdEmpleado,
        hectareasLote,
        numeroArboles,
        longitud,
        latitud,
        imagenLote,
        idFinca
      } = objectRegister;
      //var base64Data = imagenLote.replace(/^data:image\/\w+;base64,/, '');

        // Decodificar la cadena Base64 en un arreglo de bytes
        //const buffer = Buffer.from(base64Data, 'base64');


      // Ejecutar el Stored Procedure con los valores extraídos
      const LoteResult = await pool.request()
        .input('idLote', sql.Int, idLote)
        .input('pIdEmpleado', sql.Int, IdEmpleado)
        .input('phectareasLote', sql.Float, hectareasLote)
        .input('pnumeroArboles', sql.Int, numeroArboles)
        .input('plongitud', sql.Float, longitud)
        .input('platitud', sql.Float, latitud)
        .input('pimagenLote', sql.NVarChar, imagenLote)
        .input('pidFinca', sql.Int, idFinca)
        .execute('[dbo].[ADD_UPDATE_LOTES]');
  
  
      return LoteResult;
    } catch (error) {
      console.error('Error al registrar lote:', error);
      const response = {
        successful: false,
        status: 500,
        error: error.message
    };
    }
  }

//obtener lote
const GetLote = async () => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const LoteResult = await pool.request()
            .input('pIdLote', sql.Int, 0)
            .execute('[dbo].[GET_LOTES]');
            console.log("get:"+LoteResult);
    return new Promise((resolve, reject) => {
        resolve(LoteResult)
    })
}

const deleteLote = async (idLote) => {
    const pool = await getPool(); 

    const LoteResult = await pool.request()
            .input('IdLote', sql.Int, idLote)
            .execute('[dbo].[DELETE_LOTE]');

    const deletedIdLote = LoteResult.recordset[0]?.Lote || null;
    console.log("id:"+deletedIdLote);
    return new Promise((resolve, reject) => {
        resolve(deletedIdLote)
    })
}

export const methods =
{
    GetLote,
    registerLote,
    deleteLote
}