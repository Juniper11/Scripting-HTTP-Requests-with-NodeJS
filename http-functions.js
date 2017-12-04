var https = require('https');

module.exports = function getHTML (options, callback) {

  var https = require('https');
    /* Your code here */

  https.get(options, function (response) {
    chunks = []

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (chunk) {
      //console.log(data + '\n');
      chunks.push(chunk);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      //console.log('Response stream complete.');
      var html = chunks.join('');
      return callback(html);

    });

  });


};






