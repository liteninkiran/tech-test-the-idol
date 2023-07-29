const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('../sqlite.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err);
    }
});
const sql = `

    INSERT INTO teams (id, team_name) VALUES
    (1, 'Team 1'),
    (2, 'Team 2');

`;

db.run(sql);
