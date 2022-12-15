var getWeather = function () {
    var city = $('#city').val();
    localStorage.setItem("city", city);
    var apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'// + city
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var forecast = data.forecast;
                    displayForecast(forecast);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

var displayForecast = function(forecast) {
    console.log(data);
    console.log(forecast);

}

$('#init').click(function (event) {
    event.preventDefault();
    getWeather();

});