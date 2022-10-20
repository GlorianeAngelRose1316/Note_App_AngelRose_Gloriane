const fs = require ('fs');

const read = function () {

    return fs.readfileSync('./Task.txt',
    { 
        encoding: 'utf8',flag : 'r'})

}
module.exports =read;