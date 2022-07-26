const Sequelize = require('sequelize')
const db = require('../db')

const Job = db.define('job', {
    role: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
    }
  })
  
  module.exports = Job