
import {Testimonial} from "../models/Testimoniales.js"; 

const guardarTestimonial = async (req, res) => {

    //validar
    
    const{ nombre, correo, mensaje} = req.body;
    
    const errores = [];
  

    if(nombre.trim() === ''){
        errores.push({mensaje: "Nombre esta Vacio"});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: "El Correo esta Vacio"});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: "El Mensaje esta Vacio"});
    }

    if(errores.length > 0 ){
        // consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        //mostrar avisos de errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    } else {
        // almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje,
            });
            res.redirect('testimoniales')
        } catch (error) {
            console.log(error);
        }
    }

}

export{ guardarTestimonial}