const Foam = require('../models/foam');


module.exports = {
    yesFoam,
    noFoam
}

function yesFoam(req, res){
    try{
        const foam = await Foam.findById(req.param.id);
        foam.foamOrNot.push({userId: req.user.userId})
        await foam.save();
        res.status(201).json({data: 'foam is there'})
    }catch(err){
        res.status(400).json({err})
    }
}

function noFoam(req, res){
    try{
        const foam = await Foam.findOne({'foamOrNot._id': req.params.id});
        foam.foamOrNot.remove(req.params.id);
        await foam.save();
        res.json({data: 'foam is not there'})
    }catch(err){
        res.status(400).json({err})
    }
}