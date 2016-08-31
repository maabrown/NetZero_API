var fs = require('fs');
var jsonfile = require('jsonfile');

// var srcPath = '../all_data_sample.json';
// var wrPath = '../all_data_sample_formatted.json';


function changeJSON(srcPath, wrPath) {
	jsonfile.readFile(srcPath, function(err,data) {
		if (err) throw err;
		// var dataArray = data;

		var newData = [];

			for (var i = 0; i < data.length; i++) {
				// newData.push(data[i]);
				var objec = {};
				objec['DHW'] = {};
				objec['LOAD'] = {};
				objec['ELEC_CURRENT'] = {};
				for (key in data[i]) {
					
					if (key.includes('ElecCurrent_')) {
						objec['ELEC_CURRENT'][key] = data[i][key];
					}
					else if (key.includes('DHW_')) {
						objec['DHW'][key] = data[i][key];			
					}
					else if (key.includes('Load_')) {
						objec['LOAD'][key] = data[i][key];
					}
					else if (key ==='id') {
						objec[key] = data[i][key];
					}
					else {
						console.log(key);
					}
				}
				newData.push(objec);
			}
		// console.log(newData);
		jsonfile.writeFile(wrPath, newData, {spaces: 2}, function(err) {
			if (err) throw err;
		})
	})
}

changeJSON('../all_data_sample.json', '../all_data_sample_formatted.json');