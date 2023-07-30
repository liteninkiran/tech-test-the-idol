const db = require('../models/db.js');

/**
 * GET /
 * Team Data 
*/
exports.show = async (req, res) => {
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
 * Update Team Form
 */
exports.edit = async (req, res) => {

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
            res.render('team/edit', { data: data[0] });
        } else {
            res.render('404');
        }
    });
};

/**
 * PUT /
 * Update Team
 */
exports.update = async (req, res) => {

    const sql = 'UPDATE teams SET team_name = ? WHERE id = ?';

    db.run(sql, [req.body.teamName, req.params.id], (err) => {
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
 * Delete Team Data 
 */
exports.destroy = async (req, res) => {
    const sql = 'DELETE FROM teams WHERE id = ?';
    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({'error': res.message});
            return;
        }
        res.redirect('/');
    });
}

