require('dotenv').config();
import path = require('path');
import express = require('express');
import cors = require('cors');
import helmet = require('helmet');
import swaggerUi = require('swagger-ui-express');
import YAML = require('yamljs');

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import errorMiddleware = require('./middleware/error-middleware');
import requestLogMiddleware = require('./middleware/request-logger');

const app = express();
const swaggerDoc = YAML.load(path.join(__dirname, './docs/doc.yaml'));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(requestLogMiddleware);

app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routers
import countryRouter = require('./modules/countries/country.router');
import userRouter = require('./modules/users/user.router');

app.use('/api/countries', countryRouter);
app.use('/api/users', userRouter);

app.use(errorMiddleware);

export = app;
