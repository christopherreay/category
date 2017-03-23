var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();




var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err
    db.collection("mammals").insert({"sex": "snail"});


  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

MongoClient.connect('mongodb://localhost:27017/holoDecks', function (err, db) {
  if (err) throw err
    db.collection("holoDeck")
      .insert
      ( { "name": "THE HOLODECK",
          "chains": 
          { "testrun":
            { "dna":
                { "Version": 0,
                  "Id": "9eced046-0169-11e7-a9f8-0090f5e8c3f9",
                  "Name": "wat",
                  "Properties": {
                      "description": "distributed micro-blogging",
                      "language": "en"
                  },
                  "PropertiesSchema": "schema_properties.json",
                  "HashType": "sha2-256",
                  "BasedOn": {
                      "H": null
                  },
                  "Zomes": {
                      "clutter": {
                          "Name": "clutter",
                          "Description": "zome that implements micro-blogging",
                          "Code": "zome_clutter.js",
                          "CodeHash": {
                              "H": null
                          },
                          "Entries": {
                              "post": {
                                  "Name": "post",
                                  "DataFormat": "json",
                                  "Schema": "schema_post.json",
                                  "SchemaHash": {
                                      "H": null
                                  }
                              },
                              "follow": {
                                  "Name": "follow",
                                  "DataFormat": "json",
                                  "Schema": "schema_follow.json",
                                  "SchemaHash": {
                                      "H": null
                                  }
                              },
                              "profile": {
                                  "Name": "profile",
                                  "DataFormat": "json",
                                  "Schema": "schema_profile.json",
                                  "SchemaHash": {
                                      "H": null
                                  }
                              }
                          },
                          "NucleusType": "js"
                      }
                    }
                }
            }

          }
        }
      );
  

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use("/watchCoreDevelopment", index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
