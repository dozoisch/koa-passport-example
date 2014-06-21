'use strict';
var path = require('path');
var _ = require('lodash');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var base = {
  app: {
    root: path.normalize(__dirname + '/..'),
    env: env
  }
};

var specific = {
  development: {
    app: {
      port: 3000,
      name: 'Koa Passport Example - Dev',
      keys: ['super-secret-hurr-durr']
    },
    mongo: {
      url: 'mongodb://localhost/koapassport_dev',
    }
  },
  test: {
    app: {
      port: 3001,
      name: 'Koa Passport Example - Test Realm',
      keys: ['super-secret-hurr-durr']
    },
    mongo: {
      url: 'mongodb://localhost/koapassport_test',
    }
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: 'Koa Passport Example',
    },
    mongo: {
      url: 'mongodb://localhost/koapassport',
    }
  }
};

module.exports = _.merge(base, specific[env]);
