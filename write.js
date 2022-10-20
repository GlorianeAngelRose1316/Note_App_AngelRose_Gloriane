const fs = require ('fs')
const write = function (){
    fs.writeFileSync('Task.txt', 'Hi Node');

}
module.exports = write;