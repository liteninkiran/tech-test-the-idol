const db = require('../models/db.js');

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
