module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,140]
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
}