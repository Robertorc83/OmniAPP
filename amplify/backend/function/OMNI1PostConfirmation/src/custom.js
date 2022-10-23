/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB")
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();

  const params = {
    Item: {
      'id': { S: event.request.userAttributes.sub },
      '__typename': { S: 'User' },
      'username': { S: event.userName },
      'createdAt': { S: date.toISOString() },
      'updatedAt': { S: date.toISOString() },
    },
    TableName: process.env.USERTABLE,
  }

  const paramsDriver = {
    Item: {
      'id': { S: event.request.userAttributes.sub },
      '__typename': { S: 'Driver' },
      'username': { S: event.userName },
      'createdAt': { S: date.toISOString() },
      'updatedAt': { S: date.toISOString() },
    },
    TableName: process.env.DRIVERTABLE,
  }


  if(event.request.userAttributes.user_type == 'driver'){
    try {
      await ddb.putItem(paramsDriver).promise();
    console.log("Success");
    } catch (e) {
    console.log("Error", e);
    }
 
  }

   try {
      await ddb.putItem(params).promise();
    console.log("Success");
    } catch (e) {
    console.log("Error", e);
    }

  context.done(null, event);
}