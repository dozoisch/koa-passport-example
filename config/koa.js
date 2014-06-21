var session = require('koa-sess');
var views = require('co-views');
var bodyParser = require('koa-bodyparser');

module.exports = function (app, config, passport) {
  // Configure de keys used to the session
  // Without that it wont work!
  app.keys = config.app.keys;

  // Configure the cookie name of the browser
  app.use(session({
    key: 'koapassportexample.sid',
  }));
  app.use(bodyParser());

  // Note how we added passport AFTER koa-sess
  app.use(passport.initialize());
  app.use(passport.session());

  // renderer
  app.use(function *(next) {
    this.render = views('src/views', {
      map: { html: 'whiskers' },
    });
    yield next;
  });
};
