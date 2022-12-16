var getWeather = function () {
    var city = $('#city').val();
    localStorage.setItem("city", city);
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=0d9f9d9d5f240e636fa9c060806537f3'
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayForecast(data);
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

var displayForecast = function(data) {
    // console.log(data);
    // console.log(forecast);
    for (i = 0; i < 10; i++) {
    //console.log(data);
    $('#cityTemp').text("Temperature: " + data.list[i].main.temp + " Fahrenheit");
    $('#cityTitle').text(data.city.name);
    $('#cityWind').text("Wind: " + data.list[i].wind.speed);
    $('#cityHum').text("Humidity: " + data.list[i].main.humidity);

}
}

$('#init').click(function (event) {
    event.preventDefault();
    getWeather();

});