// URL
const URL = "http://api.weatherstack.com/current";
module.exports.URL = URL;

// Считываем параметер - название города
const CITY_NAME = process.argv[2];
module.exports.CITY_NAME = CITY_NAME;

// TOKEN
const TOKEN = process.env.TOKEN;
module.exports.TOKEN = TOKEN;
