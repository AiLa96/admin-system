const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authController = {
    login: (req, res) => {
        const {username, password} = req.body;
        User.findUser(username, user => {
            if (user && user.password === password) {
                const expiresIn = 3600;
                const token = jwt.sign({
                    id: user.id,
                    role: user.role
                }, 'w2Sx9EV6S4Z0So0JZWoDv6jCmeSY7cTZ9WMDEZbPVI3hkPKR59R2k3561bHH', {expiresIn});
                const expiresAt = Date.now() + expiresIn * 1000;
                res.json({token, role: user.role, expiresAt});
            } else {
                res.status(401).json({message: 'Invalid credentials'});
            }
        });
    }
};

module.exports = authController;
