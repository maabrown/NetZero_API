var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var load_doc = require('./app/models/load_model');
var mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@ds055564.mlab.com:55564/woman_superhero_dev')

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

router.get('/data/date/:user_date', function(req,res) {

 // load_doc.find({}).where({'TimeStampGPSTime' : '1904-01-01 00:00:00'}).exec(function(err,docs) {
 //     if (err) {
 //         console.log(err);
 //     } else {
 //         res.json(docs);
 //         console.log('working');
 //     }
 // })

 var match_IDs = [];
 var date = req.params.user_date;
 var date_reformatted = date.split("-");
 var user_JS_date = new Date(date_reformatted[0], date_reformatted[1] - 1, date_reformatted[2]);
 // res.send(user_JS_date);

 load_doc.find({}, '_id TimeStampGPSTime').exec(function(err,docs) {
    if (err) {
        console.log(err)
    } else {
        for (var i =0;  i < docs.length; i++) {
            console.log(docs[i].TimeStampGPSTime)
            var doc_GPS_time = docs[i].TimeStampGPSTime.substr(0,10);
            console.log(doc_GPS_time);
            var doc_GPS_time_reformatted = doc_GPS_time.split("-");
            var doc_JS_date = new Date(doc_GPS_time_reformatted[0], doc_GPS_time_reformatted[1] - 1, doc_GPS_time_reformatted[2]);

            console.log(doc_JS_date);

            if (user_JS_date.getTime() === doc_JS_date.getTime()) {
                match_IDs.push(docs[i]._id);
            }
        }
    }

    matchIDfunction(match_IDs);
    console.log(match_IDs);
 })

 function matchIDfunction(array) {
    load_doc.find({ '_id' : { $in : match_IDs}}, '_id TimeStampGPSTime').exec(function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    })
 }

})



app.use('/api', router);

app.listen(port);
