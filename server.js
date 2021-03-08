const express = require('express');
const app = express();
const importData = require('./data.json');

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello!!!");
})

app.get("/easynotes", (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port} !!!`);
});








// const express = require('express');
// const bodyParser = require('body-parser');

// // Create express app

// const app = express();

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// // const client = new MongoClient(url, {useUnifiedTopology: true});

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database!!!");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application! Take notes quickly. Organize and keep track of all your notes."});
// });

// // Require Notes routes
// require('./app/routes/note.routes')(app);


// // listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });