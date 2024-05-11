// Membuat variable kelvin
const kelvin = 90;
// membuat variable celcius 
const celsius = kelvin - 273;
// membuat variable fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// membulatkan angka desimal dari fahrenheit
fahrenheit = Math.floor(fahrenheit);
// mencetak suhu
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);