import { getPool } from "./../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerArbol = async (objectRegister) => {
    try {
      const pool = await getPool();
  
      // Extraer los valores del objeto JSON
      const {
        idArbol,
        IdEmpleado,
        identificadorArbol,
        longitud,
        latitud,
        imagenArbol,
        idLote
      } = objectRegister;
      //var base64Data = imagenLote.replace(/^data:image\/\w+;base64,/, '');

        // Decodificar la cadena Base64 en un arreglo de bytes
        //const buffer = Buffer.from(base64Data, 'base64');


      // Ejecutar el Stored Procedure con los valores extraídos
      const LoteResult = await pool.request()
        .input('pidArbol', sql.Int, idArbol)
        .input('pIdEmpleado', sql.Int, IdEmpleado)
        .input('pidentificadorArbol', sql.Int, identificadorArbol)
        .input('plongitud', sql.Float, longitud)
        .input('platitud', sql.Float, latitud)
        .input('pimagenArbol', sql.NVarChar, imagenArbol)
        .input('pidLote', sql.Int, idLote)
        .execute('[dbo].[ADD_UPDATE_ARBOL_LOTES]');
  
      return LoteResult;
    } catch (error) {
      console.error('Error al registrar el Arbol:', error);
      const response = {
        successful: false,
        status: 500,
        error: error.message
    };
    }
  }

//obtener Arbol
const GetArbol = async (idlote) => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const LoteResult = await pool.request()
            .input('idLote', sql.Int, idlote)
            .execute('[dbo].[GET_ARBOL_LOTE]');
            console.log("get:"+LoteResult);
    return new Promise((resolve, reject) => {
        resolve(LoteResult)
    })
}

const deleteArbol = async (idArbol) => {
    const pool = await getPool(); 

    const ArbolResult = await pool.request()
            .input('idArbol', sql.Int, idArbol)
            .execute('[dbo].[DELETE_ARBOL]');

    const deletedIdArbol = ArbolResult.recordset[0]?.Arbol || null;
    console.log("id:"+deletedIdArbol);
    return new Promise((resolve, reject) => {
        resolve(deletedIdArbol)
    })
}

export const methods =
{
    GetArbol,
    registerArbol,
    deleteArbol
}