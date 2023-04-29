const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({

  id:{
    type:String,
    require:true
  },
  imgDestacada:{
    type:String,
    require:true
  },
  title:{
    type:String,
    require:true
  },
  subTitle:{
    type:String,
    require:true
  },
  summary:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true
  },
  objetivo:{
    type:String,
    require:true
  },
  metodologia:{
    type:Array,
    require:true
  },
  tecnologias:{
    type:Array,
    require:true
  },
  poster:{
    type:Array,
    require:true
  },
  enlace:{
    type:String,
    require:true
  },


});


module.exports = mongoose.model('Proyecto',ProyectoSchema)