const functions = require('@google-cloud/functions-framework');
const {Client} = require('@googlemaps/google-maps-services-js')

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('check-places', async (req, res) => {
  const placeName = req.query.placeName
  const client = new Client({})

  client.findPlaceFromText({
    params: {
      input: placeName,
      inputtype: "textquery",
      key: process.env.GOOGLE_MAPS_API_KEY
    }
  }).then((r) => {
    res.send(r.data);
  }).catch((e) => {
    res.send(e);
  });

});