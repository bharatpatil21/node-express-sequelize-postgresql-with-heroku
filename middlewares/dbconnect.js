'use strict';

const Sequelize = require('sequelize');

module.exports = new Sequelize('<DB_URL', {
	dialect: 'postgres',
	protocol: 'postgres',
	dialectOptions: {
			ssl: true
	}
});