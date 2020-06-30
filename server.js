const express = require('express');
const dotenv = require('dotenv');
require('colors');

//Load Files
dotenv.config({ path: './config/config.env' });

//server info
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .italic
  )
);
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
