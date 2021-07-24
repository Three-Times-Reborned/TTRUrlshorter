const moment = require('moment');
const logger = (req, res, next) => {
    console.log(`${req.ip} ${req.method} ${res.statusCode} ${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;