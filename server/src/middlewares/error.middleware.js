class ApiError extends Error {
  constructor(status, msg, code, detail) {
    super(msg);

    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

function errorHandler(err, res) {
  let status = 500;
  let error = {
    error: "Internal error",
  };

  // unified error returning interface for JSON endpoints
  if (err instanceof ApiError) {
    status = err.status;
    error.error = err.message;
    error.code = err.code;
    error.detail = err.detail;
  } else if (err instanceof Error) {
    error.error = err.message;
    console.log(err);
    Logger.fatal(
      `Unhandled failure of server, ${res.req.method} ${res.req.originalUrl}:\n status code 500, error ${err.message} \n ${err?.stack}`,
    );
  }

  // don't cache error responses
  res.set("Cache-Control", "no-store");
  res.status(status);
  res.json(error);
}
export default errorHandler;
