const express = require('express');
const dotenv = require('dotenv');
const linesRoute = require('./routes/lines');
const agenciesRoute = require('./routes/agencies');
import "reflect-metadata";
import {AppDataSource} from './data-source';

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/lines', linesRoute);
app.use('/agencies', agenciesRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});