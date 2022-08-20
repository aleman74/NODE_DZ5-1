// Импорт констант
const {URL, CITY_NAME, TOKEN} = require('./config');

// Подключаем модуль http
const http = require('http');

// Формируем URL запроса
// const url = `http://api.weatherstack.com/current?access_key=${process.env.TOKEN}&query=${param_city}`;
const url = URL + `?access_key=${TOKEN}&query=${CITY_NAME}`;
// console.log(url);

// Получаем данные
http.get(url, (res) => {

    const {statusCode} = res;
    if (statusCode !== 200){
        console.log(`statusCode: ${statusCode}`);
        return;
    }

    res.setEncoding('utf8')
    let data = ''
    res.on('data', (chunk) => data += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(data);
//        console.log(parseData);

        // Выводим информацию на консоль
        console.log(parseData.current.weather_descriptions.join(", "));
        console.log(parseData.current.temperature > 0 ? "+" + parseData.current.temperature : parseData.current.temperature);

    })
}).on('error', (err) => {
    console.error(err);
});
