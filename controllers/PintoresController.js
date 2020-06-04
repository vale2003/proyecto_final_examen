let mongoose = require('mongoose');
let Pintores = require('../models/Pintores');

let PintoresController = {};


PintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
          
            res.render('../views/estatal/index',{
                pintores: pintor,
                title: "Listado de Pintores",
                year: new Date().getDate()
            });
        })
};

module.exports = PintoresController;