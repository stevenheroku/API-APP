import { methods as loteDB } from "../dao/loteDB.js";

function searchLotes() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.GetLote2();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    state: 404,
                    data: "No Existe Ningun Lote Creado.",
                    message: "Error",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function insertLote(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.registerLote(objectRegister);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Lote Registrado con Éxito!", idLote: result.recordsets }], message: "SUCCES" };;
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

function updatetLote(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.registerLote(objectRegister);
        console.log()
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Lote Actualizado con Éxito!", idLote: result.recordsets }], message: "SUCCES" };;
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo actualizar el registro en la base de datos",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }

    });
}

function deleteLote(idLote) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let loteData = await loteDB.deleteLote(idLote)
            console.log("del:"+loteData)
            if (loteData >0) {
                mr = { state: 200, data: "Lote: " + idLote + " eliminado correctamente", message: "SUCCESS" }
            } else {
                mr = {
                    state: 204,
                    data: "No se existe Lote para eliminar",
                    message: "ERROR",
                };
            }
            resolve(mr)
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}
export const methods =
{
    searchLotes,
    insertLote,
    updatetLote,
    deleteLote
}
