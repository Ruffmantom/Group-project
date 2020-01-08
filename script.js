var introText = $(".introText");
var locName = $('.locName');

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
            var date1 = (res.list[5].dt_txt).split("-").join("/");
            var date2 = (res.list[13].dt_txt).split("-").join("/");
            var date3 = (res.list[21].dt_txt).split("-").join("/");
            var date4 = (res.list[29].dt_txt).split("-").join("/");
            var date5 = (res.list[37].dt_txt).split("-").join("/");

            var temp1 = (res.list[5].main.temp_max + '°F');
            var temp2 = (res.list[13].main.temp_max + '°F');
            var temp3 = (res.list[21].main.temp_max + '°F');
            var temp4 = (res.list[29].main.temp_max + '°F');
            var temp5 = (res.list[37].main.temp_max + '°F');

            var humid1 = ('Humidity ' + res.list[5].main.humidity + '%');
            var humid2 = ('Humidity ' + res.list[13].main.humidity + '%');
            var humid3 = ('Humidity ' + res.list[21].main.humidity + '%');
            var humid4 = ('Humidity ' + res.list[29].main.humidity + '%');
            var humid5 = ('Humidity ' + res.list[37].main.humidity + '%');

            var wind1 = ('Wind Speed ' + res.list[5].wind.speed + 'Mph')
            var wind2 = ('Wind Speed ' + res.list[13].wind.speed + 'Mph')
            var wind3 = ('Wind Speed ' + res.list[21].wind.speed + 'Mph')
            var wind4 = ('Wind Speed ' + res.list[29].wind.speed + 'Mph')
            var wind5 = ('Wind Speed ' + res.list[37].wind.speed + 'Mph')
            // var windSpeed = (res.wind.speed);
            // console.log(tempDay1);
            var icon1 = res.list[6].weather[0].icon;
            var icon2 = res.list[14].weather[0].icon;
            var icon3 = res.list[22].weather[0].icon;
            var icon4 = res.list[30].weather[0].icon;
            var icon5 = res.list[38].weather[0].icon;

            var weatherIcon1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"
            var weatherIcon2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png"
            var weatherIcon3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png"
            var weatherIcon4 = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png"
            var weatherIcon5 = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png"


            console.log(res);


            function weatherApp1() {
                $("#weatherBox1").empty();

                $("#weatherBox1").append("<h1 class='changeMeDate'>" + date1 + "</h1>");
                $("#weatherBox1").append("<img class='imgChange' src='" + weatherIcon1 + "'>");
                $("#weatherBox1").append("<p class='changeMe1'>" + temp1 + "</p>");
                $("#weatherBox1").append("<p class='changeMe1'>" + humid1 + "</p>");
                $("#weatherBox1").append("<p class='changeMe1'>" + wind1 + "</p>");
            }
            function weatherApp2() {
                $("#weatherBox2").empty();

                $("#weatherBox2").append("<h1 class='changeMeDate'>" + date2 + "</h1>");
                $("#weatherBox2").append("<img class='imgChange' src='" + weatherIcon2 + "'>");
                $("#weatherBox2").append("<p class='changeMe1'>" + temp2 + "</p>");
                $("#weatherBox2").append("<p class='changeMe1'>" + humid2 + "</p>");
                $("#weatherBox2").append("<p class='changeMe1'>" + wind2 + "</p>");

            }
            function weatherApp3() {
                $("#weatherBox3").empty();

                $("#weatherBox3").append("<h1 class='changeMeDate'>" + date3 + "</h1>");
                $("#weatherBox3").append("<img class='imgChange' src='" + weatherIcon3 + "'>");
                $("#weatherBox3").append("<p class='changeMe1'>" + temp3 + "</p>");
                $("#weatherBox3").append("<p class='changeMe1'>" + humid3 + "</p>");
                $("#weatherBox3").append("<p class='changeMe1'>" + wind3 + "</p>");

            }
            function weatherApp4() {
                $("#weatherBox4").empty();

                $("#weatherBox4").append("<h1 class='changeMeDate'>" + date4 + "</h1>");
                $("#weatherBox4").append("<img class='imgChange' src='" + weatherIcon4 + "'>");
                $("#weatherBox4").append("<p class='changeMe1'>" + temp4 + "</p>");
                $("#weatherBox4").append("<p class='changeMe1'>" + humid4 + "</p>");
                $("#weatherBox4").append("<p class='changeMe1'>" + wind4 + "</p>");

            }
            function weatherApp5() {
                $("#weatherBox5").empty();

                $("#weatherBox5").append("<h1 class='changeMeDate'>" + date5 + "</h1>");
                $("#weatherBox5").append("<img class='imgChange' src='" + weatherIcon5 + "'>");
                $("#weatherBox5").append("<p class='changeMe1'>" + temp5 + "</p>");
                $("#weatherBox5").append("<p class='changeMe1'>" + humid5 + "</p>");
                $("#weatherBox5").append("<p class='changeMe1'>" + wind5 + "</p>");

            }
            weatherApp1();
            weatherApp2();
            weatherApp3();
            weatherApp4();
            weatherApp5();



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