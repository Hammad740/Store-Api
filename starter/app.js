require('dotenv').config();
require('express-async-errors');
///// async errors

const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//// middlewares
app.use(express.json());

//// routes
app.get('/', (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products route</a>");
});

app.use('/api/v1/products', productsRouter);
//// products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
const start = async () => {
  try {
    //? connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
