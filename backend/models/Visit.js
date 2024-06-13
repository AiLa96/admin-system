const db = require('../config/db');

const Visit = {
    recordVisit: (callback) => {
        const now = new Date();
        const sql = 'INSERT INTO visits (visit_time) VALUES (?)';
        db.query(sql, [now], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    getVisitData: (callback) => {
        const sql = 'SELECT * FROM visits ORDER BY visit_time';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
};

module.exports = Visit;
