var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '43a99e26859149dbb73e484f5c542ebc';
var sentryApp = '94987';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
    github_commit: 'sefkjsejfkjse'
  }
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);