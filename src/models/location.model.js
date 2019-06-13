// location-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const location = new Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('location', location);
};
