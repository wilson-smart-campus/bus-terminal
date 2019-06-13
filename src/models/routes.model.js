// routes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const Stop = new Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    name: { type: String, required: true }
  });

  const Routes = new Schema(
    {
      name: { type: String, required: true },
      departurePlace: { type: Stop, required: true },
      stops: [Stop]
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('routes', Routes);
};
