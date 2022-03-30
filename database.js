const sqlite3 = require("sqlite3").verbose();


let db = new sqlite3.Database('./assets/database.db', (err) => {
    if(err)
        throw Error(err);
    console.log("database is open.");
});

module.exports = db;