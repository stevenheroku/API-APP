import { methods as loteDB } from "../dao/loteDB.js";
import { methods as bitacoraDB } from "../dao/bitacoraDB.js";

function searchLotes(idFinca) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.GetLote(idFinca);

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
    const {
        IdEmpleado
    }=objectRegister;
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.registerLote(objectRegister);
        try {
            if (result.recordset[0].Lote>0) {
                mr = { state: 200, data: [{ info: "Lote Registrado con Éxito!", idLote: result.recordsets }], message: "SUCCES" };
                var json =  {"Descripcion": "se registró un nuevo lote","IdEmpleado": IdEmpleado };
                var data="Registro Lote -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
            } else if(result.recordset[0].Lote==-1){
                mr = {
                    state: 204,
                    data: "El Identificador del Lote ya Existe!",
                    message: "ERROR",
                };
            }else {
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
    const {
        IdEmpleado
    }=objectRegister;
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await loteDB.registerLote(objectRegister);
        console.log()
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Lote Actualizado con Éxito!", idLote: result.recordsets }], message: "SUCCES" };
                var json =  {"Descripcion": "se actualizó un nuevo lote","IdEmpleado": IdEmpleado };
                var data="Actualización Lote -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
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

function deleteLote(IdEmpleado,idLote) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let loteData = await loteDB.deleteLote(idLote)
            console.log("del:"+loteData)
            if (loteData >0) {
                mr = { state: 200, data: "Lote: " + idLote + " eliminado correctamente", message: "SUCCESS" }
                var json =  {"Descripcion": "se eliminó el lote: "+idLote+"","idLote":idLote,"IdEmpleado": IdEmpleado };
                var data="Eliminación Lote -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
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
