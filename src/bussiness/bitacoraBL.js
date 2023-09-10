import { methods as bitacoraDB } from "../dao/bitacoraDB.js";



function insertBitacora(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await bitacoraDB.registerBitacora(objectRegister);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Registrado con Éxito en bitacora!", idArbol: result.recordsets }], message: "SUCCES" };;
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo insertar en la base de datos",
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
    insertBitacora
}
