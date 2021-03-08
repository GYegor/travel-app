require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const errorMiddleware = require('./middleware/error-middleware');
const requestLogMiddleware = require('./middleware/request-logger');

const app = express();
const swaggerDoc = YAML.load(path.join(__dirname, './docs/doc.yaml'));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(requestLogMiddleware);

app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/api', (req,res) => {  console.log('api called!!!'); res.json({smth: 'WOW it works with API!!!'}); });


// app.use('/', (req, res, next) => {
//   if (req.originalUrl === '/') {
//     res.send('Service is running! Yo comrades!');
//     return;
//   }
//   next();
// });


// Routers
const countryRouter = require('./modules/countries/country.router');

app.use('/countries', countryRouter);

app.use('/smth', countryRouter);


// app.use((req, res) => {
//   res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
// });

app.use(errorMiddleware);

module.exports = app;
