const Proyecto = require("../models/Proyecto");

exports.crearProyecto = async (req,res) => {

  try {

    let proyecto;

    proyecto = new Proyecto(req.body);

    await proyecto.save();
    res.send(proyecto);

    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
}

exports.obtenerProyectos = async (req,res) =>{

  try {

    const proyectos = await Proyecto.find();
    res.json(proyectos);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }



}

exports.actualizarProyecto = async (req,res) => {

  try {

    const { id,imgDestacada,title,subTitle,summary,date,objetivo,metodologia,tecnologias,poster,enlace} = req.body;

    let proyecto = await Proyecto.findById(req.params.id);

    if(!proyecto){
      res.status(404).json({msg:'No existe el proyecto'})
    }

    proyecto.id = id;
    proyecto.imgDestacada = imgDestacada;
    proyecto.title = title;
    proyecto.subTitle = subTitle;
    proyecto.summary = summary;
    proyecto.date = date;
    proyecto.objetivo = objetivo;
    proyecto.metodologia = metodologia;
    proyecto.tecnologias = tecnologias;
    proyecto.poster = poster;
    proyecto.enlace = enlace;

    proyecto = await Proyecto.findOneAndUpdate({ _id:req.params.id }, proyecto, {new:true})
    res.json(proyecto);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }

}


exports.obtenerProyecto = async (req,res) => {

  try {


    let proyecto = await Proyecto.findById(req.params.id);

    if(!proyecto){
      res.status(404).json({msg:'No existe el proyecto'})
    }

    

    res.json(proyecto);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }

}

exports.eliminarProyecto = async (req,res) => {

  try {


    let proyecto = await Proyecto.findById(req.params.id);

    if(!proyecto){
      res.status(404).json({msg:'No existe el proyecto'})
    }

    await Proyecto.findOneAndRemove({_id:req.params.id})
    res.json({msg: 'Producto eliminado con exito'});
  
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }

}
