//Dependencies for express and the built in path functionality
const express = require('express');
const api = require('./routes/api/apiRoutesIndex.js');
const htmlRouter = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serves static files in public folder
app.use(express.static('public'));
app.use('/api', api);
app.use('/', htmlRouter);


// Notify in console of port app is listening on.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
