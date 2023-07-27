const express = require('express')
const app = express()
const port = 80

// Data source
const db = require("./models/db")

// Set static folders
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

// Set views folder and engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    const sql = `SELECT * FROM mydata`;
    db.all(sql, [], (err, rows) => {
        if (err) return console.error(err.message);
        res.render("index", {data: rows});
    });
})

app.listen(port, () => console.info(`App listening on port ${port}`))