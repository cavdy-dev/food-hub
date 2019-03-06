export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Meal.associate = (models) => {
    // hhhh
  };
  return Meal;
};
