const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
require("./config/mongoose.js")(app);
app.use('/files', express.static("files"));
require('./app/routerHandler')(app)

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('<h1>Shopping Cart</h1>');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
}); 