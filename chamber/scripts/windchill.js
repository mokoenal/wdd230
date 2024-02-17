// windchill.js

// Function to calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if the values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Round to two decimal places
    } else {
        return "N/A";
    }
}

// Function to update the wind chill value on the webpage
function updateWindChill() {
    // Get the temperature and wind speed values from the HTML
    var temperature = parseFloat(document.getElementById("temperature").innerText);
    var windSpeed = parseFloat(document.getElementById("wind-speed").innerText);

    // Call the calculateWindChill function and update the HTML
    var windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").innerText = "Windchill: " + windChillValue + " °F";
}

// Call the updateWindChill function when the page loads
window.onload = updateWindChill;