var introText = $(".introText");
var locName = $('.locName');
var locImage = $('.getImage');

function makeHtml(res) {
    // console.log(res.results[0].intro);
    // making a intro var from the response that is given from the ajax call
    var intro = res.results[0].intro;
    // appending it to the html
    introText.text(intro);
    //grabing the title
    // console.log(res.results[0].name);
    var locationName = res.results[0].name;
    locName.text(locationName);
    // console.log('getting image')
    // console.log(res.results[0].images[Math.floor(Math.random()) * 10].source_url)
    var searchImg = res.results[0].images[Math.floor(Math.random() * 10) + 1].source_url;
    locImage.attr('src', searchImg)

}

$(document).ready(function () {
    console.log('issss ready');


    /////// search for weather ///////
    function theSearch1() {
        var city = $("#searchBar").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";

        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (res) {
            console.log(res);
            //// this is where the fun is ////




        })
    };
    //// APPID=44c38455c07369969dfcf31cc60c6f41 ////
    //// q=salt+lake+city    q='s the location / city ////
    /////// search for weather ///////



    /////// search for attractions ///////
    function theSearch2() {
        var city = $("#searchBar").val();
        console.log(city);

        var str = city.split(" ");

        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        var result = str.join("_");
        console.log(result);

        var queryURL = "https://www.triposo.com/api/20190906/location.json?id=" + result + "&fields=all";

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "X-Triposo-Account": "AZJ7DF38",
                "X-Triposo-Token": "a6qzxiu56n8m4r4cec4prnmdpqck6jj0"
            }

        }).then(function (response) {
            console.log(response);
            //// this is where the fun is ////
            makeHtml(response);


        })
    };

    //// "X-Triposo-Account": "AZJ7DF38" ////
    //// "X-Triposo-Token": "a6qzxiu56n8m4r4cec4prnmdpqck6jj0" ////
    /////// search for attractions ///////


    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////
    ////////                               //////
    /////////                   ////////
    ///////             ///////
    //////      ///////
    /////////

    $("#searchBtn").on('click', function () {
        event.preventDefault();
        console.log('You clicked the submit button or enter')
        theSearch1();
        theSearch2();

    });

    /////
    /////      /////////
    ///////               ///////////
    ///////                         /////////
    ///////                                 /////////
    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////







})