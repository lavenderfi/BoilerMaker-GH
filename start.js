// say our sequelize instance is create in 'db.js'
const db = require('./db/db.js'); 
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server');
const PORT = process.env.PORT || 8080;

db.sync()  // sync our database
  .then(function(){
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`)) // then start listening with our express server once we have synced
  })  