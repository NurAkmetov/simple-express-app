const express = require('express');
const dotenv = require('dotenv');
const authRoute = require('./routes/lines');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/lines', authRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});