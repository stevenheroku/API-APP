import { methods as plagasDB } from "../dao/plagasDB.js";

function getPlagas() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await plagasDB.GetPlagas();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ninguna plaga creada!",
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
    getPlagas
}
