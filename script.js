$(document).ready(function () {
    console.log('working');


    var settings = {
        "url": "http://api.openweathermap.org/data/2.5/forecast?APPID=44c38455c07369969dfcf31cc60c6f41&q=salt+lake+city",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    //// APPID=44c38455c07369969dfcf31cc60c6f41 ////
    //// q=salt+lake+city    q='s the location / city ////

    var attractions = {
        "url": "https://www.triposo.com/api/20190906/location.json?id=Salt_Lake_City&fields=all",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "X-Triposo-Account": "AZJ7DF38",
            "X-Triposo-Token": "a6qzxiu56n8m4r4cec4prnmdpqck6jj0"
        },
    };
    $.ajax(attractions).done(function (response) {
        console.log(response);
    });
    //// "X-Triposo-Account": "AZJ7DF38" ////
    //// "X-Triposo-Token": "a6qzxiu56n8m4r4cec4prnmdpqck6jj0" ////











})