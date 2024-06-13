const db = require('../config/db');

const User = {
    findUser: (username, callback) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        db.query(sql, [username], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }
};

module.exports = User;
