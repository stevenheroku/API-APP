import { methods as enfermedadesDB } from "../dao/enfermedadesDB.js";

function getEnfermedades() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await enfermedadesDB.GetEnfermedades();

        try {
            if (result.recordset.length > 0) {
                mr = { state: 200, data: result.recordsets, message: "SUCCES" };
            } else {
                mr = {
                    sstate: 404,
                    data: "No existe ninguna enfermedad creada!",
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
    getEnfermedades
}
