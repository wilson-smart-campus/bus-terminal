const location = require('./location/location.service.js');
const routes = require('./routes/routes.service.js');
const schedule = require('./schedule/schedule.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(location);
  app.configure(routes);
  app.configure(schedule);
};
