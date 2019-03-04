import userData from '../utils/userData';

const UserMain = {
  // getting meal by id
  getUser(user) {
    const userPro = userData.user.find(
      users => users.email == user.email && users.password == user.password,
    );
    return userPro || { message: 'Failed to login' };
  },
};

export default UserMain;
