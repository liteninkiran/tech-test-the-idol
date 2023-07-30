const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('../sqlite.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err);
    }
});
const sql = `

    CREATE TABLE members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        member_name varchar(100) NOT NULL,
        team_id int(11) NOT NULL,
        CONSTRAINT fk_member_team FOREIGN KEY (team_id) REFERENCES teams (_id) ON DELETE RESTRICT ON UPDATE RESTRICT
    );

`;

db.run(sql);
