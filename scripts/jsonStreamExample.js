var fs = require('fs');
var JSONStream = require('JSONStream');
var jsonfile = require('jsonfile');
var es = require('event-stream');

var stream = fs.createReadStream('../all-subsystems-json-array.json', {encoding: 'utf8'})
var parser = JSONStream.stringifyObject();
var writeStream = fs.createWriteStream('../newNested.json', {encoding: 'utf8'});

// stream.pipe(parser)
//    .on('data', function(data) {
//       console.log('key: ' + data.key);
//       console.log('value: ' + data.value)
//    })
//    .on('end', function(data) {
//       console.log('done');
//    })

stream
   .pipe(JSONStream.parse('*'))
   .pipe(es.map( function(data, callback) {
      console.log(typeof data);
      var object = {}; 
                object['Timestamp'] = {}; //## here is where you decide the key names that you will use to organize your JSON
                object['TIMESTAMP_INFO'] = {};
                object['HVAC_HVAC'] = {};
                object['HVAC_HEAT'] = {};
                object['HVAC_X14'] = {};
                object['HVAC_ULTRA'] = {};
      
      for (key in data) {
         console.log(data[key]);
         // key is the key
         // data[key] is the value
  

                    
        if (key.includes('TIMESTAMP_')) { // ## in your if statement you will use string matches, using includes() method to decide if the subsystem variable goes into the nested JSON object
            object['TIMESTAMP_INFO'][key] = data[key];
        }
        else if (key.includes('HVAC_HVAC')) {
            object['HVAC_HVAC'][key] = data[key];           
        }
        else if (key.includes('HVAC_Heat')) { //## be careful with being case-sensitive
            object['HVAC_HEAT'][key] = data[key];
        }
        else if (key.includes('HVAC_X14')) {
            object['HVAC_X14'][key] = data[key];
        }
        else if (key.includes('HVAC_Ultra')) {
            object['HVAC_ULTRA'][key] = data[key];
        }
        else if (key.includes('DayOf')) { // ## you can use different strings to push keys to particular objects
            object['TIMESTAMP_INFO'][key] = data[key];
        }
        else if (key === 'Timestamp') { //## by using equality, and the order of the if statements, you can isolate individual variables
            object[key] = data[key];
        }
        else {
            console.log(key); //## checks to see if you missed any Subsystem variables
        }
               
      }
      callback(null, JSON.stringify(object));
   }))
   .pipe(writeStream)