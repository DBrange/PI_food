const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Diet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // type: DataTypes.INTEGER,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}