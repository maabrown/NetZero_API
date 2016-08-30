var Converter = require('csvtojson').Converter;
var converter = new Converter({
	constructResult: false,
	toArrayString: true
});

var readStream = require('fs').createReadStream('../Lighting.csv');
var writeStream = require('fs').createWriteStream('../output.json');

readStream.pipe(converter).pipe(writeStream);