var express = require('express');
var server;

server = express();
server.use(function(inRequest, inResponse, inNext)
{
    inResponse.header("Access-Control-Allow-Origin", "*");
    inResponse.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    inNext();
});
server.use('/static', express.static(__dirname+'/static'));
server.get('/sql', function(inRequest, inResponse)
{
    // we need credentials and a SQL statement
    var inputAuth;
    var inputSQL;

    // we will return json (and an http status code)
    var outputJSON;
    var outputCode;

    inputAuth = inRequest.header('auth');
    inputSQL = inRequest.header('sql');
    outputCode = 200;
    outputJSON = {
        Errors:[],
        Messages:[]
    };

    if(inputAuth)
    {
        outputJSON.Messages.push("Credentials provided");

        if(inputSQL)
        {
            outputJSON.Messages.push("SQL statement provided");

        }
        else
        {
            outputJSON.Errors.push("SQL statement missing");
        }
    }
    else
    {
        outputJSON.Errors.push("Credentials missing");
    }

    //send a json response with response code
    inResponse.status(outputCode).json(outputJSON);

});
module.exports = server;