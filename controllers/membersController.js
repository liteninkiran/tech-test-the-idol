const db = require('../models/db.js');

/**
 * GET /
 * Member Data 
*/
exports.show = async (req, res) => {
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

/**
 * GET /
 * Create Member Form
 */
exports.create = async (req, res) => {
    const sql = 'SELECT t.id, t.team_name FROM teams AS t';
    db.all(sql, [], (err, data) => {
        res.render('member/add', { teams: data });
    });
};

/**
 * POST /
 * Create Member
 */
exports.store = async (req, res) => {

    const sql = 'INSERT INTO members (member_name, team_id) VALUES (?, ?)';

    db.run(sql, [req.body.memberName, req.body.team], (err) => {
        if (err) {
            console.log(err);
        }
    });

    res.redirect('/');
};

/**
 * GET /
 * Update Member Form
 */
exports.edit = async (req, res) => {
    const sqlTeams = 'SELECT t.id, t.team_name FROM teams AS t';
    const sql = 'SELECT m.id, m.member_name FROM members AS m WHERE m.id = ?';
    db.all(sql, req.params.id, (err, data) => {
        if (data.length === 1) {
            db.all(sql, req.params.id, (err1, data1) => {
                res.render('member/edit', { data: data[0], teams: data1 });
            });
        } else {
            res.render('404');
        }
    });
};

/**
 * PUT /
 * Update Member
 */
exports.update = async (req, res) => {

    const sql = 'UPDATE members SET member_name = ? WHERE id = ?';

    db.run(sql, [req.body.memberName, req.params.id], (err) => {
        if (err) {
            return res.json({
                status: 300,
                success: false,
                error: err,
            });
        }
    });

    res.redirect('/');
};

/**
 * DELETE /
 * Delete Member Data 
 */
exports.destroy = async (req, res) => {
    const sql = 'DELETE FROM members WHERE id = ?';
    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({'error': res.message});
            return;
        }
        res.redirect('/');
    });
}

