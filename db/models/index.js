'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

Campus.hasMany(User);
User.belongsTo(Campus);

module.exports = {User: User,
					Campus: Campus};