import { methods as loteDB } from "../dao/loteDB.js";
function searchLotes() {
    return new Promise(async(resolve, reject) => {
        var mr;
        console.log("info: ")
        var result = await loteDB.GetLote2();
       
        try {
            if (result.length > 0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo encontrar ningun Lote.",
                    message: "SUCCES",
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
                mr = { state: 200, data: [{ info: "Lote Registrado", idAnimal: result }], message: "SUCCES" };;
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
    searchLotes
}
