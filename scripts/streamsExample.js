var data = require('../all_data_sample.json'),
    Readable = require('stream').Readable,
    util = require('util');
 
var ReadStream = function() {
  Readable.call(this, {objectMode: true, highWaterMark: 1});
  this.data = data;
  this.curIndex = 0;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function() {
  if (this.curIndex === this.data.length)
    return this.push(null);
 
  var data = this.data[this.curIndex++];
  console.log('read: ' + JSON.stringify(data));
  this.push(data);
};
//module.exports = ReadStream;


var stream = new ReadStream();

stream.on('readable', function(record) {
  console.log('received:' + JSON.stringify(record));
});

stream.on('end', function() {
	console.log('done');
})



// var Writable = require('stream').Writable,
//     util = require('util');
 
// var WriteStream = function() {
//   Writable.call(this, {objectMode: true});
// };
// util.inherits(WriteStream, Writable);
 
// WriteStream.prototype._write = function(chunk, encoding, callback) {
//   console.log('write: ' + JSON.stringify(chunk));
//   callback();
// };
//module.exports = WriteStream;

// var ws = new WriteStream();

// var ws2 = require('fs').createWriteStream('../output.json');

 // stream.pipe(ws)