"use strict";
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.hello = async (event) => {
  console.log("comes inside fn", JSON.stringify(event, null, 2));
  try {
    const data = await s3.listBuckets().promise();
    return data
  } catch (e) {
    return e.message
  }
};
