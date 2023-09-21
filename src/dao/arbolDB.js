import { getPool } from "./../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerArbol = async (objectRegister) => {
    try {
      const pool = await getPool();
  
      // Extraer los valores del objeto JSON
      const {
        IdArbol,
        Empleado,
        IdentificadorArbol,
        Longitud,
        Latitud,
        ImagenArbol,
        IdLote
      } = objectRegister;
      //var base64Data = imagenLote.replace(/^data:image\/\w+;base64,/, '');

        // Decodificar la cadena Base64 en un arreglo de bytes
        //const buffer = Buffer.from(base64Data, 'base64');

        console.log("ENTRO A CREAR ARBOL")
      // Ejecutar el Stored Procedure con los valores extraídos
      const LoteResult = await pool.request()
        .input('pidArbol', sql.Int, IdArbol)
        .input('pIdEmpleado', sql.Int, Empleado)
        .input('pidentificadorArbol', sql.Int, IdentificadorArbol)
        .input('plongitud', sql.NVarChar, Longitud)
        .input('platitud', sql.NVarChar, Latitud)
        .input('pimagenArbol', sql.NVarChar, ImagenArbol)
        .input('pidLote', sql.Int, IdLote)
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

  
//STORE PROCEDURE
const registerArbolControl = async (objectRegister) => {
  try {
    const pool = await getPool();

    // Extraer los valores del objeto JSON
    const {
      CantidadIndividuos,
      TipoEstacion,
      TipoControl,
      IdArbol,
      IdPlaga_Enfermedad,
      IdTipoEstructura
    } = objectRegister;

    const ArbolControlResult = await pool.request()
      .input('pCantidadIndividuos', sql.Int, CantidadIndividuos)
      .input('pTipoEstacion', sql.Int, TipoEstacion)
      .input('pTipoControl', sql.Int, TipoControl)
      .input('pIdArbol', sql.Int, IdArbol)
      .input('pIdPlaga_Enfermedad', sql.Int, IdPlaga_Enfermedad)
      .input('pIdTipoEstructura', sql.Int, IdTipoEstructura)
      .execute('[dbo].[ADD_CONTROL_ARBOL]');

    return ArbolControlResult;
  } catch (error) {
    console.error('Error al registrar el ArbolControl:', error);
    const response = {
      successful: false,
      status: 500,
      error: error.message
  };
  }
}
//obtener Arboles de un lote
const GetArbolLotes = async (idlote) => {
    const pool = await getPool(); 
        // Ejecutar el Stored Procedure
        const ArbolLoteResult = await pool.request()
            .input('idLote', sql.Int, idlote)
            .execute('[dbo].[GET_ARBOL_LOTE]');
            console.log("get:"+ArbolLoteResult);
    return new Promise((resolve, reject) => {
        resolve(ArbolLoteResult)
        console.log("get2:"+ArbolLoteResult);
    })
}

//obtener Arboles de un lote
const GetArbol = async (idArbol) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const ArbolResult = await pool.request()
          .input('idArbol', sql.Int, idArbol)
          .execute('[dbo].[GET_ARBOL]');
          console.log("get:"+ArbolResult);
  return new Promise((resolve, reject) => {
      resolve(ArbolResult)
      console.log("get2:"+ArbolResult);
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


//PLAGAS ARBOL
const GetArbolPlagas = async (idArbol,fecha) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const ArbolPlagaResult = await pool.request()
          .input('idArbol', sql.Int, idArbol)
          .input('FechaControl', sql.NVarChar, fecha)
          .execute('[dbo].[GET_ARBOL_PLAGAS]');
          console.log("get:"+ArbolPlagaResult);
  return new Promise((resolve, reject) => {
      resolve(ArbolPlagaResult)
      console.log("get2:"+ArbolPlagaResult);
  })
}

//ENFERMEDADES ARBOL
const GetArbolEnfermedades = async (idArbol,fecha) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const ArbolEnfermedadResult = await pool.request()
          .input('idArbol', sql.Int, idArbol)
          .input('FechaControl', sql.NVarChar, fecha)
          .execute('[dbo].[GET_ARBOL_ENFERMEDADES]');
          console.log("get:"+ArbolEnfermedadResult);
  return new Promise((resolve, reject) => {
      resolve(ArbolEnfermedadResult)
      console.log("get2:"+ArbolEnfermedadResult);
  })
}

const GetArbolDetalle = async (idArbol) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const ArbolDetalleResult = await pool.request()
          .input('idArbol', sql.Int, idArbol)
          .execute('[dbo].[GET_ARBOL_DETALLE]');
          console.log("get:"+ArbolDetalleResult);
  return new Promise((resolve, reject) => {
      resolve(ArbolDetalleResult)
      console.log("get2:"+ArbolDetalleResult);
  })
}


const GetArbolControlBitacora = async (idArbol) => {
  const pool = await getPool(); 
      // Ejecutar el Stored Procedure
      const ArbolControlBitacora = await pool.request()
          .input('idArbol', sql.Int, idArbol)
          .execute('[dbo].[GET_DIAS_CONTROL_ARBOL]');
          console.log("get:"+ArbolControlBitacora.Label);
  return new Promise((resolve, reject) => {
      resolve(ArbolControlBitacora)
      console.log("get2:"+ArbolControlBitacora.Label);
  })
}
export const methods =
{
  GetArbolLotes,
    GetArbol,
    registerArbol,
    deleteArbol,
    registerArbolControl,
    GetArbolPlagas,
    GetArbolEnfermedades,
    GetArbolDetalle,
    GetArbolControlBitacora
}