const asyncHandler = require("../middleware/async");


exports.postUrl = asyncHandler(async (req, res) => {
    // Validate request
    if(!req.body.url) {
      return res.status(400).send({
          message: "Url  cannot be empty"
      });
  }
  const topic = req.params.topic
  const data = {
      msg : req.body.url
  }
  
  res.status(200).send({ status: "success", topic:topic, data: data });
  });

  exports.postMessage = asyncHandler(async (req, res) => {
    // Validate request
    if(!req.body.message) {
      return res.status(400).send({
          message: "Message  cannot be empty"
      });
  }
  const topic = req.params.topic
  const data = [
     { msg : req.body.message}
  ]
  
  res.status(200).send({ status: "success", topic:topic, data: data });
  })