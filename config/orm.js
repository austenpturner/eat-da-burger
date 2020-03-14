// Require connection
const connection = require('./connection.js');

// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      selectAll()`
//      `insertOne()`
//      `updateOne()`

// Export the ORM object in `module.exports`

const orm = {
    selectAll: (table, cb) => {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    insertOne: (table, firstCol, secondCol, firstVal, secondVal, cb) => {
        const queryString = `INSERT INTO ${table} (${firstCol}, ${secondCol}) VALUES (?, ?)`;
        connection.query(queryString, 
        [firstVal, secondVal],
        (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    updateOne: (table, col, val, id, cb) => {
        const queryString = `UPDATE ${table} SET ${col} = ? WHERE id = ?`
        connection.query(queryString,
        [val, id],
        function(err, data) {
            if (err) {
            throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;

