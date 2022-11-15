import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.DB_HOST);

const app =  express();

// conectar base de datos

db.authenticate()
    .then(() => console.log('Base de Datos conectada'))
    .catch( error => console.log(error))

// definir puerto

const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug')

// obtener el ano actual
app.use((req, res,next)=>{

    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viaje";
    next();
});

// agregar body prser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// definir la carpeta publica
app.use(express.static('public'));

// agrega router
app.use('/', router)


app.listen(port, ()=> {
    console.log(`El Servidor esta Funcinando en el puerto: ${port}`);
})