var Twitter = require('twitter');

var config = require('./config.js').config;

var client = new Twitter(config);

/*
var params = {screen_name: 'rex'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
 if (!error) {
   console.log(tweets[0].text);
 }
});
*/

client.get('search/tweets', {q: process.argv[2], count: process.argv[3], geocode:'37.781157,-122.398720,50mi'}, function(error, tweets, response){
  //console.log(tweets);
  console.log('found ' + tweets.statuses.length + ' tweets:');
  //for (tweet in tweets) {console.log(tweet.text)}
  for (var i in tweets.statuses) {
   console.log(tweets.statuses[i].created_at + ': @' + tweets.statuses[i].user.screen_name + ': ' + tweets.statuses[i].text);
    //if (object.hasOwnProperty()) {

    //}
  }
});
