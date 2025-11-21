const apiKey = "6f5569b1be044f86b4d165342252111";

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            if (data.error) {
                document.getElementById("weatherBox").innerHTML = `
                    <p>City not found 😢</p>
                `;
                return;
            }

            const weather = data.current;

            document.getElementById("weatherBox").innerHTML = `
                <img src="https:${weather.condition.icon}">
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>🌡 Temperature: ${weather.temp_c}°C</p>
                <p>🌤 Condition: ${weather.condition.text}</p>
                <p>💧 Humidity: ${weather.humidity}%</p>
                <p>🌬 Wind: ${weather.wind_kph} km/h</p>
            `;
        })
        .catch(error => {
            console.log(error);
            alert("Error fetching weather data");
        });
}
