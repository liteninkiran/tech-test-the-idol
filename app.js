const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const app = express();
const port = 80;

// Data source
const db = require("./models/db");

app.use(methodOverride('_method'));

// Set static folders
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));

// Set views folder and engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Route
app.use('/', require('./routes/teamListing'));

// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => console.info(`App listening on port ${port}`));
