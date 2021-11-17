const ListWeather = require('../models/listWeather');

exports.home = async (req,res) =>{
    try{
        res.render('index', {
            title:'Home'
        })
    } catch(error){
        console.log(error);
    }
}

exports.add = async(req,res,next) =>{
    console.log("rq.bosy ", req.body);
    const listWeather = new ListWeather(req.body)
    try{
        await listWeather.save()
        res.json({
            message:"Ciudad agregada!"
        })
    } catch(error){
        console.log(error);
        res.send(error);
        next()
    }
}
exports.detail = async (req,res) =>{
    try{
        const detailWeather = await ListWeather.findById(req.params.id);
        if(!detailWeather){
            res.status(404).json({
                Message:"La ciudad seleccionada no existe"
            })
        }
        res.json(detailWeather)
    } catch(error){
        res.status(400).json({
            message:"Error al procesar la peticion."
        })
    }
}
exports.list = async(req,res) =>{
    console.log("lista => ");
    try{
        const listWeather = await ListWeather.find({})
        res.json(listWeather)
    } catch(error) {
        console.log(error);
        res.send(error);
        next()
    }
}
exports.update = async(req,res) =>{
    try{
        const weather = ListWeather.findOneAndUpdate({
            _id:req.params.id
        })
        res.json({
            message: "Clima actualizado"
        })
    } catch(error){
        res.status(400).json({
            message:"Error al procesar la peticion"
        })
    }
}
exports.delete = async (req, res) =>{
    try{
        await ListWeather.findByIdAndDelete({_id:req.params.id})
        res.json({
            message:"Ciudad eliminada"
        })
    } catch(error){
        res.status(400).json({
            message:"Error al procesar la peticion"
        })
    }
}