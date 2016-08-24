var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var load_doc = require('./app/models/load_model');
var mongoose = require('mongoose');

mongoose.connect('mongodb://mbrownii:C0mmerce2016@ds055564.mlab.com:55564/woman_superhero_dev')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req,res,next) {
    next();
})

router.get('/', function(req,res) {
    res.json({ message: 'this is the first step'});
});

router.route('/data')

    .get(function(req,res) {

        load_doc.find({}, '_id TimeStampGPSTime', function(err, docs) {
            res.json(docs);
        })
    });


// checking the keys from the object to the param for mlab

router.param('subsystem', function(req,res,next, subsystem) {

    var subsystem_object = {
        "TSG" : "TimeStampGPSTime",
        "DAY" : "DayOfWeek",
        "TSC" : "TimeStampCount",
        "1stFlLiEnUs" : "Load_1stFloorLightsEnergyUsage",
        "1stFlLiExEnUs" : "Load_1stFloorLightsExpectedEnergyUsage",
        "1stFlLiExPoUs" : "Load_1stFloorLightsExpectedPowerUsage"
    }

    var subsys_var = subsystem;

    for (key in subsystem_object) {
        if (key == subsys_var) {
            subsys_var = subsystem_object[key];
        }
    }

    req.subsystem = subsys_var;

    next();
})

router.get('/data/subsystem/:subsystem', function(req,res) {

    if (req.query.day == undefined) {
        load_doc.find({}, req.subsystem, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
                console.log('working');
            }
        })
    } else {
        load_doc.find({},  req.subsystem + ' DayOfWeek').where({'DayOfWeek' : req.query.day}).exec(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.json(docs);
                console.log(req.query.day)
            }
        });
    }

});

// router.get('/data/date/:date', function(req,res) {

//  load_doc.find({}).where({'TimeStampGPSTime' : '1904-01-01 00:00:00'}).exec(function(err,docs) {
//      if (err) {
//          console.log(err);
//      } else {
//          res.json(docs);
//          console.log('working');
//      }
//  })
// })

// energy usage on friday  /1stFlLiEnUs?DAY='Sunday'

// router.get('/data/:subsystem/', function(req,res) {



// })

app.use('/api', router);

app.listen(port);
