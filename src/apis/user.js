function getUserInfo() {
  return $http.get('/user');
}

export default {
  getUserInfo,
};
