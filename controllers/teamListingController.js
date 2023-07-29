const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./db/sqlite.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err);
    }
});

/**
 * GET /
 * Index
 */
exports.index = async (req, res) => {

    const sql = `
        SELECT
        t.id AS team_id,
        t.team_name,
        m.id AS member_id,
        m.member_name

        FROM teams AS t

        LEFT OUTER JOIN members AS m
        ON m.team_id = t.id

        ORDER BY
        t.team_name ASC,
        m.member_name ASC;
`;

    db.all(sql, [], (err, data) => {
        if (err) {
            return res.json({
                status: 300,
                success: false,
                error: err,
            });
        }

        res.render('index', { data });
    });
}

/**
 * DELETE /
 * Delete Member Data 
 */
exports.deleteMember = async (req, res) => {
    const sql = 'DELETE FROM members WHERE id = ?';
    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({'error': res.message});
            return;
        }
        res.redirect('/');
    });
}

/**
 * DELETE /
 * Delete Team Data 
 */
exports.deleteTeam = async (req, res) => {
    const sql = 'DELETE FROM teams WHERE id = ?';
    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({'error': res.message});
            return;
        }
        res.redirect('/');
    });
}

/**
 * GET /
 * Team Data 
*/
exports.viewTeam = async (req, res) => {
    const sql = 'SELECT t.id, t.team_name FROM teams AS t WHERE t.id = ?';
    db.all(sql, req.params.id, (err, data) => {
        if (err) {
            return res.json({
                status: 300,
                success: false,
                error: err,
            });
        }
        if (data.length === 1) {
            res.render('team/view', { data: data[0] });
        } else {
            res.render('404');
        }
    });
}

/**
 * GET /
 * Member Data 
*/
exports.viewMember = async (req, res) => {
    const sql = 'SELECT m.id, m.member_name FROM members AS m WHERE m.id = ?';
    db.all(sql, req.params.id, (err, data) => {
        if (err) {
            return res.json({
                status: 300,
                success: false,
                error: err,
            });
        }
        if (data.length === 1) {
            res.render('member/view', { data: data[0] });
        } else {
            res.render('404');
        }
    });
}
