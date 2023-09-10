import { getPool } from "../database/connection";
const sql = require("mssql");


//STORE PROCEDURE
const registerUser_Empleado = async (objectRegister) => {
    try {
      const pool = await getPool();
  
      // Extraer los valores del objeto JSON
      const {
        Nombres,
        Apellidos,
        FechaNacimiento,
        Telefono,
        Sexo,
        Dpi,
        Direccion,
        pass,
        Finca
      } = objectRegister.Empleado;
      const {
        Correo,
        Password,
        Rol

      } = objectRegister.Usuario;
      //var base64Data = imagenLote.replace(/^data:image\/\w+;base64,/, '');

        // Decodificar la cadena Base64 en un arreglo de bytes
        //const buffer = Buffer.from(base64Data, 'base64');

      console.log("db:"+objectRegister.Usuario.Correo)
      // Ejecutar el Stored Procedure con los valores extraídos
      const EmpledadoResult = await pool.request()
        .input('nombres', sql.NVarChar, Nombres)
        .input('apellidos', sql.NVarChar, Apellidos)
        .input('fechaNacimmiento', sql.NVarChar, FechaNacimiento)
        .input('direccion', sql.NVarChar, Direccion)
        .input('Sexo', sql.NVarChar, Sexo)
        .input('correo', sql.NVarChar, Correo)
        .input('pass', sql.NVarChar, Password)
        .input('telefono', sql.NVarChar, Telefono)
        .input('dpi', sql.NVarChar, Dpi)
        .input('idFinca', sql.Int, Finca)
        .input('Rol', sql.Int, Rol)
        .execute('[dbo].[ADD_USUARIO_EMPLEADO]');
  
      return EmpledadoResult;
    } catch (error) {
      console.error('Error al registrar el Empleado:', error);
      const err = {
        successful: false,
        status: 500,
        error: error.message
    };
    return err;
    }
  }

//obtener Usuario si existe con sus credenciales para acceder al sistema
const GetUser = async (datos) => {
  const {
    Correo,
    Pass
  } = datos;
  try {
    const pool = await getPool(); 
    // Ejecutar el Stored Procedure
    const LoteResult = await pool.request()
      .input('correo', sql.NVarChar, Correo)
      .input('pass', sql.NVarChar, Pass)
      .execute('[dbo].[GET_USER]');
    
    console.log("get:" + LoteResult);
    
    return new Promise((resolve, reject) => {
      resolve(LoteResult);
    });
  } catch (error) {
    console.error("Error en GetUser:", error);
    throw error; // Puedes lanzar el error nuevamente para que se maneje en un nivel superior si es necesario.
  }
}



export const methods =
{
  registerUser_Empleado,
  GetUser
}