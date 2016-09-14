var fs = require('fs');
var jsonfile = require('jsonfile');

function changeJSON(srcPath, writePath) {
    jsonfile.readFile(srcPath, function(err,data) {  //## data are the objects in your output.json file
        if (err) throw err;

        var newData = []; //## create a new array to hold all your new objects

            for (var i = 0; i < data.length; i++) {  // ## array loop
                var object = {};   
                object['Timestamp'] = {}; //## here is where you decide the key names that you will use to organize your JSON
                object['TIMESTAMP_INFO'] = {};
                object['HVAC_HVAC'] = {};
                object['HVAC_HEAT'] = {};
                object['HVAC_X14'] = {};
                object['HVAC_ULTRA'] = {};
            
                for (key in data[i]) { //## object loop
                    
                    if (key.includes('TIMESTAMP_')) { // ## in your if statement you will use string matches, using includes() method to decide if the subsystem variable goes into the nested JSON object
                        object['TIMESTAMP_INFO'][key] = data[i][key];
                    }
                    else if (key.includes('HVAC_HVAC')) {
                        object['HVAC_HVAC'][key] = data[i][key];           
                    }
                    else if (key.includes('HVAC_Heat')) { //## be careful with being case-sensitive
                        object['HVAC_HEAT'][key] = data[i][key];
                    }
                    else if (key.includes('HVAC_X14')) {
                        object['HVAC_X14'][key] = data[i][key];
                    }
                    else if (key.includes('HVAC_Ultra')) {
                        object['HVAC_ULTRA'][key] = data[i][key];
                    }
                    else if (key.includes('DayOf')) { // ## you can use different strings to push keys to particular objects
                        object['TIMESTAMP_INFO'][key] = data[i][key];
                    }
                    else if (key === 'Timestamp') { //## by using equality, and the order of the if statements, you can isolate individual variables
                        object[key] = data[i][key];
                    }
                    else {
                        console.log(key); //## checks to see if you missed any Subsystem variables
                    }
                }
                newData.push(object); //## pushes objects back to the array
            }

        jsonfile.writeFile(writePath, newData, {spaces: 2}, function(err) {
            if (err) throw err;
        })
    })
}

changeJSON('../output.json', '../HVACnestedoutput.json'); 