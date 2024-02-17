function calculateWindChill(temperature, windSpeed) {
    // Check if input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate the wind chill factor
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        // Display the wind chill factor on the page
        console.log("Wind Chill Factor: " + windChill.toFixed(2) + " °F");
    } else {
        // Display "N/A" if input values do not meet the requirements
        console.log("Wind Chill Factor: N/A");
    }


    var currentTemperature = parseFloat(document.getElementById("temperature").innerText);
    var currentWindSpeed = parseFloat(document.getElementById("wind-speed").innerText);

    // Call the calculateWindChill function
    calculateWindChill(currentTemperature, currentWindSpeed);
}