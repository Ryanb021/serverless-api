const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String
});

const peopleModel = dynamoose.model('People', schema);

exports.handler = async(event) => {
  let id = event?.pathParameters?.id

  const response = {statusCode: null, body: null};
  try{
    await peopleModel.delete(id);
    response.statusCode = 200;
  } catch (e){

    console.log(e.message)
    response.statusCode = 500;
  }

  return response;
};
