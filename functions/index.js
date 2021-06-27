const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

exports.sendSlackMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    axios
      .post(
        "https://hooks.slack.com/services/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",
        req.query
      )
      .then(function(response) {
        // console.log(response);
        res.status(200).send({ text: "Complete" });
      })
      .catch(function(error) {
        // console.log(error);
        res.status(400).send({ text: "Error" });
      });
  });
});
