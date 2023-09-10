import { methods as rolDB } from "../dao/rolDB.js";

function getRol() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await rolDB.GetRol();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ningun Rol creado!",
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
    getRol
}
