var AWS = require("aws-sdk");
let publishARN = process.env.publishARN

exports.handler = function(event, context) {
  var message = event.Records[0].Sns.Message;
  console.log('Message received from SNS:', message);

  var sns = new AWS.SNS();
  var params = {
      Message: message, 
      Subject: 'Forwarding SNS via Lambda:',
      TopicArn: publishARN
  };
  sns.publish(params, context.done);
};