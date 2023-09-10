import { methods as estacionesBL } from "../dao/estacionesDB.js";

function getEstaciones() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await estacionesBL.GetEstaciones();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ninguna Estacion Creada",
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
    getEstaciones
}
