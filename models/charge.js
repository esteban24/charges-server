module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Charge', {
    	description: { type: DataTypes.STRING(255), allowNull: false, validate: { len:[1, 255] }},
    	amount: { type: DataTypes.FLOAT, allowNull: false, validate: { min: 1, max: 9999 }}
	},
	{
		underscored: true,
		tableName: 'charge'
	}
  )
};