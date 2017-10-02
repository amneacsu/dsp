const util = require('util');
const { Transform } = require('stream');

function Upper(options) {
  // allow use without new
  if (!(this instanceof Upper)) {
    return new Upper(options);
  }

  // init Transform
  Transform.call(this, options);
}

Upper.prototype._transform = function(chunk, encoding, callback) {
  callback(null, chunk);
}

util.inherits(Upper, Transform);

module.exports = Upper;
