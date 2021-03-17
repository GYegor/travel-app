"use strict";
const mongoose = require("mongoose");
const errors = require("../errors/errors-list");
module.exports = (id, resource) => {
    if (mongoose.Types.ObjectId.isValid(id)) {
        return true;
    }
    throw new errors.BadRequestError(`invalid ${resource} ID. ID must be objectID`);
};
