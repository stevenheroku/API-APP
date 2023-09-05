import { Router } from "express";
import { methods as plagasController } from "../controllers/plagasController";
import { methods as lotesController } from "../controllers/loteController";
const router = Router();

const router2 = Router();
//USUARIOS

//ROLES

//FINCAS

//ARBOLES

//LOTES
router.get("/lotes",lotesController.getLotes);
router.post("addLote",lotesController.registerLote);

//PLAGAS
router.get("/plagas1",plagasController.getPlagas2);

router.get("/plagas2",plagasController.getPlagas3);

//ENFERMEDADES



export default router;
