import { Router } from "express";
import { methods as plagasController } from "../controllers/plagasController";
const router = Router();

const router2 = Router();
//USUARIOS

//ROLES

//FINCAS

//ARBOLES

//LOTES


//PLAGAS
router.get("/plagas1",plagasController.getPlagas2);

router.get("/plagas2",plagasController.getPlagas3);

//ENFERMEDADES



export default router;
