export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: false,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Order);
  };
  return User;
};
