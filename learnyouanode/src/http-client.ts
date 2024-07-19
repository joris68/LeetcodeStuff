const http = require('http');
const bl = require('bl')

const urlGiven : string = String(process.argv[2]);
console.log(urlGiven);

http.get(urlGiven, (res: any) => {
    let data = [];

    res.on('data', (chunk: Buffer) => {
        //data.push(chunk);
        console.log(String(chunk));
    });

    res.on('end' , () =>{
        console.log("response ended");
    });

}).on('Error', (err:Error) => {
    console.log('Error: ', err.message);
});


http.get(urlGiven, (response) => {
    response.pipe(bl((err, data) => {
        if (err) console.error(err);
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})