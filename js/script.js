document.getElementById('conversion-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unit-from').value;
    const unitTo = document.getElementById('unit-to').value;

    let convertedValue;

    const conversionRates = {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001
    };

    if (unitFrom === unitTo) {
        convertedValue = value; 
    } else {
        convertedValue = value * conversionRates[unitFrom] / conversionRates[unitTo];
    }

    document.getElementById('result').innerText = 
        ` ${convertedValue} ${unitTo}`;
});