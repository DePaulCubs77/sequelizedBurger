// Exporting the burger table model
module.exports = function(sequelize, DataTypes) {
	var burger = sequelize.define('burger', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},

		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},

		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},

	});
	return burger;
};