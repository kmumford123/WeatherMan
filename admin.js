
const fs = require("fs")
function Admin (filename){
    this.readlog = function(){
        fs.readFile(filename, 'utf8', function(err, response){console.log(response)});
    };

}
module.exports = Admin;