const app = require('express')()

module.exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    console.log("err.status", err.status);
    console.log("err.message", err.message);

    // Send a meaningful error response to the client
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
};
