const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
require('colors');

//Load Files
dotenv.config({ path: './.env' });
const communities = require('./routes/communities');
const DBConnection = require('./models/db/DBConnection');

//server info
const app = express();
DBConnection();
app.use(express.json());
app.use('/api/v1/communities', communities);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .italic
  )
);
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
