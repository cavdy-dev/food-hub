export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
  };
  return Menu;
};
