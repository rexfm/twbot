#!/usr/bin/env node
var Twitter = require('twitter');

console.log('sending tweet: ' + process.argv[2]);
 
var config = require('./config.js').config;

var client = new Twitter(config);

client.post('statuses/update', {status: process.argv[2]},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

