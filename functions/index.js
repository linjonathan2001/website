/* eslint-disable indent */
const functions = require("firebase-functions");
const axios = require("axios");

exports.sendSlackMessage = functions.https.onCall((data, context) => {
  axios.post(
    "https://hooks.slack.com/services/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",
    data
  );
});
