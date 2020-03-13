// Require connection
const connection = require('./connection.js');

// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      selectAll()`
//      `insertOne()`
//      `updateOne()`

// Export the ORM object in `module.exports`

const orm = {
    selectAll: (cb, template) => {
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }
            cb(template, { burgers: data });
        });
    },
    insertOne: (burgerName, cb, route) => {
        const queryString = `INSERT INTO burgers (burger_name, devoured), VALUES (?, ?)`;
        connection.query(queryString, 
        [burgerName, false],
        (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data.affectedRows);
            cb(route);
        });
    },
    updateOne: (burgerName, devouredStatus, id) => {
        const queryString = `UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?`
        connection.query(queryString,
        [burgerName, devouredStatus, id],
        function(err, data) {
            if (err) {
            throw err;
            }
    
            console.log(data.changedRows);
    
            if (data.changedRows > 0) {
                console.log('table updated.');
            } else {
                console.log('no update made.');
            }
        });
    }
};

module.exports = orm;

