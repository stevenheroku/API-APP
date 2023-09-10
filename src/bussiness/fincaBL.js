import { methods as fincaDB } from "../dao/fincaDB.js";

function getFinca() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await fincaDB.GetFinca();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ninguna Finca",
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
    getFinca
}
