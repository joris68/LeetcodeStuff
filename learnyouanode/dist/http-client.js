"use strict";
const http = require('http');
const urlGiven = String(process.argv[2]);
console.log(urlGiven);
http.get(urlGiven, (res) => {
    let data = [];
    res.on('data', (chunk) => {
        //data.push(chunk);
        console.log(String(chunk));
    });
    res.on('end', () => {
        console.log("response ended");
    });
}).on('Error', (err) => {
    console.log('Error: ', err.message);
});
