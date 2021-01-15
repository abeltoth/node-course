const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=2d3697f599bacb7cf5bacd8be405c93e&query=40,-75';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();