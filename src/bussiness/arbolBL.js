import { methods as arbolDB } from "../dao/arbolDB.js";
import { methods as bitacoraDB } from "../dao/bitacoraDB.js";

function searchArbolLote(idlote) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbolLotes(idlote);
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


function searchArbol(idArbol) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbol(idArbol);
        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No se pudo Obtener el Árbol.",
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
    const {
        IdEmpleado
    }=objectRegister;
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.registerArbol(objectRegister);
        try {
            if (result.recordset[0].Arbol>0) {
                mr = { state: 200, data: [{ info: "Arbol Registrado con Éxito!", idArbol: result.recordsets }], message: "SUCCES" };
                var json =  {"Descripcion": "se registró un nuevo árbol","IdEmpleado": IdEmpleado };
                var data="Registro Árbol -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
            } else if(result.recordset[0].Arbol==-1){
                mr = {
                    state: 204,
                    data: "El Identificador del Árbol ya Existe!",
                    message: "ERROR",
                };
            }else if(result.recordset[0].Arbol==-1){
                mr = {
                    state: 204,
                    data: "El lote no existe",
                    message: "ERROR",
                };
            }
            else {
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

function insertArbolControl(objectRegister) {
    const {
        IdEmpleado
    }=objectRegister;
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.registerArbolControl(objectRegister);
        try {
            if (result.recordset[0].ArbolControl>0) {
                mr = { state: 200, data: [{ info: "ArbolControl Registrado con Éxito!", idArbol: result.recordsets }], message: "SUCCES" };
                var json =  {"Descripcion": "se registró un nuevo árbolControl","IdEmpleado": IdEmpleado };
                var data="Registro ÁrbolControl -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
            } else if(result.recordset[0].ArbolControl==-1){
                mr = {
                    state: 204,
                    data: "Ya Ingreso esa estación para al Arbol!",
                    message: "ERROR",
                };
            }else if(result.recordset[0].ArbolControl==-2){
                mr = {
                    state: 204,
                    data: "El Árbol no Existe!",
                    message: "ERROR",
                };
            }
            else {
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
    const {
        IdEmpleado
    }=objectRegister;
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.registerArbol(objectRegister);
        console.log()
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Arbol Actualizado con Éxito!", idArbol: result.recordsets }], message: "SUCCES" };
                var json =  {"Descripcion": "se actualizó un nuevo Arbol","IdEmpleado": IdEmpleado };
                var data="Actualización Arbol -> "+JSON.stringify(json)+""
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

function deleteArbol(IdEmpleado,idArbol) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let loteData = await arbolDB.deleteArbol(idArbol)
            console.log("del:"+loteData)
            if (loteData >0) {
                mr = { state: 200, data: "Arbol: " + idArbol + " eliminado correctamente", message: "SUCCESS" };
                var json =  {"Descripcion": "se eliminó el arbol: "+idArbol+"","idArbol":idArbol,"IdEmpleado": IdEmpleado };
                var data="Eliminación Árbol -> "+JSON.stringify(json)+""
                await bitacoraDB.registerBitacora(data,IdEmpleado);
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

function searchArbolPlagas(idArbol,fecha) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbolPlagas(idArbol,fecha);
        try {
            if (result.recordset[0].Valor> 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else if(result.recordset[0].Valor==-1){
                mr = {
                    sstate: 404,
                    data: "No existen Plagas de Árbol!",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchArbolEnfermedades(idArbol,fecha) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbolEnfermedades(idArbol,fecha);
        try {
            if (result.recordset[0].Valor> 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else if(result.recordset[0].Valor==-1){
                mr = {
                    sstate: 404,
                    data: "No existen Enfermedades del Árbol!",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchArbolBitacora(idArbol) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbolControlBitacora(idArbol);
        try {
            if (result.recordset[0].Valor> 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else if(result.recordset[0].Valor==-1){
                mr = {
                    sstate: 404,
                    data: "No existen Control del Árbol!",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchArbolDetalle(idArbol) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await arbolDB.GetArbolDetalle(idArbol);
        console.log(result.recordset[0].Valor)
        try {
            if (result.recordset[0].Valor> 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else if(result.recordset[0].Valor==-1){
                mr = {
                    sstate: 404,
                    data: "No existen el Árbol!",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}
export const methods =
{
    searchArbolLote,
    insertArbol,
    updatetArbol,
    deleteArbol,
    insertArbolControl,
    searchArbolEnfermedades,
    searchArbolPlagas,
    searchArbolDetalle,
    searchArbol,
    searchArbolBitacora
}
