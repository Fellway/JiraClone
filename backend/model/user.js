function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.getUsername = function () {
  return this.username;
}

User.prototype.getPassword = function () {
  return this.password;
}