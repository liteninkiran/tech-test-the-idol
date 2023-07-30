const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('../sqlite.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err);
    }
});
const sqlArray = [
    'DROP TABLE IF EXISTS `members`;',
    'DROP TABLE IF EXISTS `teams`;',
    `CREATE TABLE teams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        team_name varchar(100) NOT NULL
    );`,
];

db.serialize(() => {
    db.run(sqlArray[0])
    .run(sqlArray[1])
    .run(sqlArray[2]);
});
