import { methods as arbolDB } from "../dao/arbolDB.js";

function searchArbol() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbol();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No se pudo encontrar ningun Arbol.",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function insertArbol(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.registerArbol(objectRegister);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Arbol Registrado con Éxito!", idArbol: result.recordsets }], message: "SUCCES" };;
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

function updatetArbol(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.registerArbol(objectRegister);
        console.log()
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Arbol Actualizado con Éxito!", idArbol: result.recordsets }], message: "SUCCES" };;
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

function deleteArbol(idArbol) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let loteData = await arbolDB.deleteArbol(idArbol)
            console.log("del:"+loteData)
            if (loteData >0) {
                mr = { state: 200, data: "Arbol: " + idArbol + " eliminado correctamente", message: "SUCCESS" }
            } else {
                mr = {
                    state: 204,
                    data: "No se existe el Arbol para eliminar",
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
    searchArbol,
    insertArbol,
    updatetArbol,
    deleteArbol
}
