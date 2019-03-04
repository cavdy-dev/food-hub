// export default (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   User.associate = (models) => {
//     User.belongsToMany(models.Order, {
//       through: 'user',
//       foreignKey: 99
//     });
//   };

//   return User;
// };

// created our Meal Schema
class User {
  constructor() {
    this.id = null;
    this.email = null;
    this.password = null;
  }
}
export default User;
