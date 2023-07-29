const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('../sqlite.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err);
    }
});
const sql = `

    INSERT INTO members (id, member_name, team_id) VALUES
    (1, 'Dave', 1),
    (2, 'Gary', 1),
    (3, 'Jane', 2),
    (4, 'Daniel', 2),
    (5, 'Daphne', 1),
    (6, 'Eric', 2);

`;

db.run(sql);
