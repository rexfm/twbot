#!/usr/bin/env node
var Twitter = require('twitter');

console.log('streaming live tweets for: ' + process.argv[2]);

var config = require('./config.js').config;

var client = new Twitter(config);

client.stream('statuses/filter', {track: process.argv[2]}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.user.screen_name);
    console.log('> ' + tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
