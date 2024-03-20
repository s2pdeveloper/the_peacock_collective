const ApiError = require('./api.error');

module.exports.errorHandler = (err, req, res, next) => {

    console.error(err); // Log the error stack trace
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Check if the error is a custom error with a specific status code
    if (err instanceof ApiError) {
        statusCode = err.statusCode;
    } else {
        message = 'Internal Server Error';
        statusCode = 500;
    }
    res.status(statusCode).json({ error: message });
};

