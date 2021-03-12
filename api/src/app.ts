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

// app.get('/api', (req,res) => {  console.log('api called!!!'); res.json({smth: 'WOW it works with API!!!'}); });


// app.use('/', (req, res, next) => {
//   if (req.originalUrl === '/') {
//     res.send('Service is running! Yo comrades!');
//     return;
//   }
//   next();
// });


// Routers
import countryRouter = require('./modules/countries/country.router');

app.use('/api/countries', countryRouter);

// app.use('/smth', countryRouter);


// app.use((req, res) => {
//   res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
// });

app.use(errorMiddleware);

export = app;
