var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');

// var getStream = function () {
//     var jsonData = '../all_data_sample.json',
//         stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
//         parser = JSONStream.parse(['rows', true]);
//         return stream.pipe(parser);
// };
// var readStream = fs.createReadStream(jsonData, {encoding: 'utf8'});
// var writeStream = fs.createWriteStream('../newNested.json');


// readStream.on('data', function(data) {

// 	writeStream.write(data);
// })

 // getStream().pipe();

fileStream = fs.createReadStream('../all_data_sample.json', {encoding: 'utf8'});
	fileStream.pipe(JSONStream.parse('*'))
	.pipe(es.through(function(data) {
		console.log(data);
		this.pause();
		return data;
	}, function end() {
		this.emit('end')
	}))