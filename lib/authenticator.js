var User = require('mongoose').model('User');
var co = require('co');

exports.localUser = function (username, password, done) {
  co(function *() {
    try {
      return yield User.matchUser(username, password);
    } catch (ex) {
      console.log(ex);
      return null;
    }
  })(done);
};
