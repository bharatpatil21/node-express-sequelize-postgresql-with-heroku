const Sequelize = require('sequelize');
const db = require('../middlewares/dbconnect');

const Account = db.define('account', {
	name: {
		type: Sequelize.STRING
	},
	accountnumber: {
		type: Sequelize.STRING
	}
},
	{
		schema: 'salesforce2' ,
		timestamps: false,
	}
);

module.exports = Account;