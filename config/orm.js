// Require connection
const connection = require('./connection.js');

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
        const queryString = `UPDATE ${table} SET ${col} = ? WHERE id = ?`;
        connection.query(queryString,
        [val, id],
        (err, data) => {
            if (err) {
            throw err;
            }
            cb(data);
        });
    },
    destroy: (table, col, val, cb) => {
        const queryString = `DELETE FROM ${table} WHERE ${col} = ?`;
        connection.query(queryString,
        [val],
        (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;

