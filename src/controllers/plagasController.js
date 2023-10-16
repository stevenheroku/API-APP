const express = require("express");
import { methods as plagasBL } from "../bussiness/plagasBL.js";
const routes = express.Router();



routes.get("/plaga", (req, res) => {
  plagasBL.getPlagas()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});


module.exports = routes;