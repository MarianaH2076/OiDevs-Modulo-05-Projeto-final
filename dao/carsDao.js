const connDb = require("../infra/connection");
const { ulid } = require("ulid");


class Car {

    //Create a car
    create(data, callback) {
        const { name, model, brand, year } = data;
        const sql = `INSERT INTO cars
                    (id, name, brand, year)
                    VALUES
                    ('${ulid()}', '${name}', '${model}', '${brand}', '${year}')`;

        connDb.run(sql, callback);
    }

    //Get all cars
    findAll() {
        const sql = `SELECT * FROM cars`;
        connDb.all(sql, callback);
    }

    //Get one car (id)
    findOne(id, callback) {
        const sql = `SELECT * FROM cars WHERE id = '${id}'`;
        connDb.get(sql, callback);
    }

    findOneName(model, callback) {
        const sql = `SELECT * FROM cars WHERE model = '${model}'`;
        connDb.get(sql, callback);
    }

    //Update a car
    updateOne(id, data, callback) {
        
    }

    //Delete a car
    delete() {}

}

module.exports =  new Car();
// module.exports = (dbConn) => new Cars(dbConn);