"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("../app");
const config = require("../common/config");
const connectToDB = require("../common/db/mongodb");
const port = process.env.PORT || config.DEV_PORT;
app.listen(port, () => console.log(`server listening at http://localhost:${port}`));
connectToDB();
