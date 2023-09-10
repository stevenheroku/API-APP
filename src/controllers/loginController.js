//import { getPool } from "./../database/connection";
//const sql = require("mssql");

const express = require("express");
import { methods as loginBL } from "../bussiness/loginBL.js";
const routes = express.Router();



routes.get("/user", (req, res) => {
  console.log("entro al controller");
  let userLogin = req.body;
  loginBL.loginUser(userLogin)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

routes.post("/newUserEpl", async (req, res) => {
  try {
    let user_epl = req.body;
    user_epl.operacion = 1;
    console.log(req.body);
    const result = await loginBL.insertUser_Epl(user_epl);

    // Maneja el resultado según tus necesidades
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});


module.exports = routes;
