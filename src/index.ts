/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
  console.log('initializing');
  callback(null, '');
};
*/

export const handler = function (request, response, context) {
  console.log('hello world, from typescript');

  response.setStatusCode(200);
  response.send(JSON.stringify({
    message: 'hello world, from typescript',
    ...request.queries,
  }));
};
