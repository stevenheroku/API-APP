//import mysql from "promise-mysql";
import sql from "mssql"

import config from "../config";
//Server=localhost;Database=master;Trusted_Connection=True;
/*const conection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
});*/

const dbsettings ={
  user:"steven",
  password:"jsrr.2023",
  server:"DESKTOP-NOLK5A6\\JSRODRIGUEZR",
  database:"app_control",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
/*const dbsettings ={
  user:"jsrodriguezr",
  password:"jsrr.2023",
  server:"appcontrolplagas.database.windows.net",
  database:"app_control",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};*/
async function getPool() {
  try {
    const pool = await sql.connect(dbsettings);
    return pool;
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
  }
}

/*const getConnection = () =>{
  return conection;
}*/

module.exports ={
  //getConnection,
  getPool
}