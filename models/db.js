const sqlite = require("sqlite3").verbose();
let sql;
// Connect to DB
const db = new sqlite.Database("./db/sqlite.db", sqlite.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
});
module.exports = db;
