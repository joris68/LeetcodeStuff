
const path = require('path')
const os = require('os')
const fs = require('node:fs/promises');


const relPath = String(process.argv[2]);
const fileEnding = String(process.argv[3]);


const workingDir = process.cwd();
console.log(workingDir)

const filterPredicate =  (filename: string, ending: string ) : boolean => {
    const slenght = filename.length;
    const end = filename.slice(slenght -3 , slenght);
    console.log(`Ending: ${end}`);

    if(end === ending) return true;
    return false;
}   


function selectFiles (path: string, fileEnding: string) :void  {

    let fullPath = workingDir + path;
    console.log(fullPath);

    fs.readdir(fullPath).then((files : string[])  => {
        let filtered : string [] = files.filter((x : string ) => filterPredicate(x, fileEnding));
        filtered.forEach(x => console.log(x))
    }).catch((err: Error) => console.log(err))

}

selectFiles(relPath, fileEnding);