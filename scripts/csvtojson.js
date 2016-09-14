var Converter = require('csvtojson').Converter;
var converter = new Converter({
	constructResult: false,
	toArrayString: true
});

var readStream = require('fs').createReadStream('../All-Subsystems.csv');
var writeStream = require('fs').createWriteStream('../all-subsystems-json-array.json');

readStream.pipe(converter).pipe(writeStream);