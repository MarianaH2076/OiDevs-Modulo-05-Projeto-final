const cars = require("../dao/carsDao")

exports.createOne = (req, res) => {
    res.send("CREATE");
    cars.save();
}

exports.getOne = (req, res) => {
    res.send(`GET ONE: ${req.params.id}`);
    cars.findOne();
}

exports.getAll = (req, res) => {
    res.send("GET ALL");
    cars.findAll();
}

exports.updateOne = (req, res) => {
    res.send(`UPDATE ONE: ${req.params.id}`);
    cars.update();
}

exports.deleteOne = (req, res) => {
    res.send(`DELETE ONE: ${req.params.id}`);
    cars.delete();
}