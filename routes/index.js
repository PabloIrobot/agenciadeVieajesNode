import express from "express";
import { 
    paguinaInicio,
    paguinaNosotros,
    paguinatestimoniales,
    paguinaViajes,
    paguinaDetalleViaje 
} from "../controllers/paguinasController.js";
import{
    guardarTestimonial
} from '../controllers/testimonialController.js'


const router = express.Router();

router.get('/', paguinaInicio);

router.get('/nosotros', paguinaNosotros );

router.get('/viajes', paguinaViajes);

router.get('/viajes/:slug', paguinaDetalleViaje);

router.get('/testimoniales', paguinatestimoniales);

router.post('/testimoniales', guardarTestimonial);



export default router;