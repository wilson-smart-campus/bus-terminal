// Initializes the `routes` service on path `/routes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/routes.model');
const hooks = require('./routes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/routes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('routes');

  service.hooks(hooks);
};
