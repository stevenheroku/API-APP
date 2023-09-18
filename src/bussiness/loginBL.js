import { methods as loginDB } from "../dao/loginDB.js";
const jwt = require('jsonwebtoken')

function loginUser(datos) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loginDB.GetUser(datos);
        console.log("USUARIO: "+datos.Correo)
        console.log(result.recordset[0].Empleado)

        try {
            if (result.recordset[0].Empleado > 0) {
                const token = jwt.sign(datos, 'stil');
                mr = { state: 200, data: result.recordset[0], message: 'SUCCESS' }
               //mr = { state: 200, data: "Inicio de Sesión con Éxito!", message: "SUCCES" };

            } else if(result.recordset[0].Empleado =-1) {
                mr = {
                    state: 404,
                    data: "Credenciales Incorrectas!",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function updatePassUser(datos) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loginDB.updatePass(datos);
        console.log("USUARIO: "+datos.Correo)
        console.log(result.recordset[0].Usuario)

        try {
            if (result.recordset[0].Usuario > 0) {
                const token = jwt.sign(datos, 'stil');
                mr = { state: 200, data: result.recordset[0], message: 'SUCCESS' }
               //mr = { state: 200, data: "Inicio de Sesión con Éxito!", message: "SUCCES" };

            } else if(result.recordset[0].Usuario =-1) {
                mr = {
                    state: 404,
                    data: "La contraseña debe ser diferente a la actual!",
                    message: "ERROR",
                };
            }
            else if(result.recordset[0].Usuario =-2) {
                mr = {
                    state: 404,
                    data: "El correo no existe!",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}
function insertUser_Epl(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loginDB.registerUser_Empleado(objectRegister);
        console.log(result.recordset)
        try {
            if (result.recordset[0].Valor>0) {
                mr = { state: 200, data: [{ info: "Empleado Registrado con Éxito!", idUser: result.recordsets }], message: "SUCCES" };;
            } else if(result.recordset[0].Valor ===-1){
                mr = {
                    state: 204,
                    data: "El DPI del empleado ya Existe!",
                    message: "ERROR",
                };
            }
            else if(result.recordset[0].Valor ===-2) {
                mr = {
                    sstate: 204,
                    data: "Error al Crear el Empleado!",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }

    });
}

export const methods =
{
    insertUser_Epl,
    loginUser,
    updatePassUser
}
