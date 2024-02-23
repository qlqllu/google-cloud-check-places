const functions = require('@google-cloud/functions-framework');
const axios = require('axios');
const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('check-places', async (req, res) => {
  const placeName = req.query.placeName;
});