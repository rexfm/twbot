#!/usr/bin/env node
var Twitter = require('twitter');

console.log('responding with "'+process.argv[3]+'" live tweets for: ' + process.argv[2]);

var config = require('./config.js').config;

var client = new Twitter(config);

client.stream('statuses/filter', {track: process.argv[2]}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.user.screen_name);
    console.log('> ' + tweet.text);

    client.post('statuses/update', {status: '@' + tweet.user.screen_name + '  ' + process.argv[3]},  function(error, tweet, response){
      if(error) throw error;
      console.log(tweet);  // Tweet body. 
      console.log(response);  // Raw response object. 
    });

  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
