import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paguinaInicio = async (req, res) =>{
    //consultar tres viajes del modelo Viajes
    const promiseDB = []

    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))
    
    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: "Inicio",
            clase: 'home',
            viajes: resultado[0],
            testimoniales : resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
    
}

const paguinaNosotros = (req, res) =>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paguinatestimoniales =  async (req, res) =>{

    try {

        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
       console.log(error); 
    }

    
    
}
const paguinaViajes = async (req, res) =>{

    // consultar DB
    const viajes =  await Viaje.findAll();
    
    // console.log(viajes);

    res.render('viajes', {
        pagina: "Próximos Viajes",
        viajes,
    })
}

//Muestra un viaje por su slug
const paguinaDetalleViaje = async (req,res) => {
     
    const { slug } = req.params;
    
    try {
        const viaje = await Viaje.findOne({ where : {slug}})
        
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
     } catch (error) {
        console.log(error);
     }
}

export{
    paguinaInicio,
    paguinaNosotros,
    paguinatestimoniales,
    paguinaViajes,
    paguinaDetalleViaje,
}
