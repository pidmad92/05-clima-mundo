# 05-clima-mundo

var unirest = require("unirest");

var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");

req.query({
	"location": "New York"
});

req.headers({
	"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
	"x-rapidapi-key": "7712def03cmsh33c17c4fbbe5d7dp1d70dcjsn8b0113899e64"
});