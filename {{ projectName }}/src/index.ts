/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
  console.log('initializing');
  callback(null, '');
};
*/

export const handler = function (event, context, callback) {
    console.log('hello world, from typescript');
    callback(null, "hello world, from typescript");
};
