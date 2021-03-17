"use strict";
const http_status_codes_1 = require("http-status-codes");
class BadRequestError extends Error {
    constructor(reason) {
        super();
        this.status = http_status_codes_1.StatusCodes.BAD_REQUEST;
        this.statusText = http_status_codes_1.ReasonPhrases.BAD_REQUEST;
        this.reason = reason;
    }
}
class NotFoundError extends Error {
    constructor(entity) {
        super();
        this.status = http_status_codes_1.StatusCodes.NOT_FOUND;
        this.statusText = http_status_codes_1.ReasonPhrases.NOT_FOUND;
        this.reason = `${entity} not found`;
    }
}
class InternalServerError extends Error {
    constructor() {
        super();
        this.status = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        this.statusText = http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR;
        this.reason = 'something went wrong';
    }
}
class MongoDuplicateError extends Error {
    constructor(reason) {
        super();
        this.status = http_status_codes_1.StatusCodes.CONFLICT;
        this.statusText = http_status_codes_1.ReasonPhrases.CONFLICT;
        this.reason = reason;
    }
}
module.exports = {
    BadRequestError,
    NotFoundError,
    InternalServerError,
    MongoDuplicateError,
};
