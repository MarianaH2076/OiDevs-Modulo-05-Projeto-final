const connDb = require("../infra/connection");
const Car = require("../dao/carsDao");

exports.createOne = (req, res) => {
   Car.create(req.body, (err) => {
    if(!err) {
        res.send({});
    } else {
        res.send({err});
    }
   })
}

exports.getOne = (req, res) => {
    Car.findOne(req.params.id, (err, data) => {
        if(data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({err: "Car not found"});
        }
    })
}

exports.getAll = (req, res) => {
    Car.findAll((err, data) => res.send(data));
    //por que precisa colocar o err como parâmetro também?
}

exports.updateOne = (req, res) => {
    //se der erro, pode ser aqui!
    Car.update(req.params.id, req.body, (err) => {
        if(err){
            res.status(404).send({msg: err});
        } else {
            res.status(200).end();
        }
    })
}

exports.deleteOne = (req, res) => {
    Car.delete(req.params.id, (err) => {
        if(!err) res.status(204).end();
    })
}