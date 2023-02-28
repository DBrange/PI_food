const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Recipe",
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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        alowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      stepByStep: {
        type: DataTypes.TEXT,
        alowNull: false,
      },
    },
    { timestamps: false }
  );
}