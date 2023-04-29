const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos servidor
const app = express();


//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/proyectos', require('./routes/proyecto'));




app.listen(4000, ()=>{
  console.log("El servidor esta corriendo al pelo")
});
