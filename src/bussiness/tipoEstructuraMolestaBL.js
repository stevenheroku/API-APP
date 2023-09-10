import { methods as tipoEstructuraMolestaDB } from "../dao/tipoEstructuraMolestaDB.js";

function getTipoEstructura() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await tipoEstructuraMolestaDB.GetTipoEstructura();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ningun Tipo de estructura creada!",
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
    getTipoEstructura
}
