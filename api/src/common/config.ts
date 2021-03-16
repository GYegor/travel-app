import dotenv = require('dotenv');
import path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export = {
  DEFAULT_LANG: 'en',
  DEV_PORT:  4000,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
};
