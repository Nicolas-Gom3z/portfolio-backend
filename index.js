const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos servidor
const app = express();
const PORT = process.env.PORT || 4000; 

//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/proyectos', require('./routes/proyecto'));




app.listen(PORT, ()=>{
  console.log("El servidor esta corriendo al pelo")
});
