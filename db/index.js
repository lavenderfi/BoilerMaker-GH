const db = require('./db')

const Job = require('./Job')

//associations could go here!

module.exports = {
  db,
  models: {
    Job,
  },
}