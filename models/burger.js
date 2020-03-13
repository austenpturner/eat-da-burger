// Require orm object from config folder
const orm = require('../config/orm.js');

// Create burger object calling orm methods using burger specific input
const burger = {
    selectAll: cb => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    },
    insertOne: (firstCol, secondCol, firstVal, secondVal, cb) => {
        orm.insertOne('burgers', firstCol, secondCol, firstVal, secondVal, (res) => {
            cb(res);
        });
    },
    updateOne: (firstCol, secondCol, firstVal, secondVal, id, cb) => {
        orm.updateOne('burgers', firstCol, secondCol, firstVal, secondVal, id, (res) => {
            cb(res);
        });
    }
};

// Export burger object
module.exports = burger;

