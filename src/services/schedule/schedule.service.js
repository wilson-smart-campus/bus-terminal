// Initializes the `schedule` service on path `/schedule`
const createService = require('feathers-mongoose');
const createModel = require('../../models/schedule.model');
const hooks = require('./schedule.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/schedule', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('schedule');

  service.hooks(hooks);
};
