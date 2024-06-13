const Visit = require('../models/Visit');

const visitController = {
    recordVisit: (req, res) => {
        Visit.recordVisit(result => {
            res.sendStatus(200);
        });
    },
    getVisitData: (req, res) => {
        Visit.getVisitData(data => {
            res.json(data);
        });
    }
};

module.exports = visitController;
