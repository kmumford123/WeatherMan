var weather=require("weather-js");
var moment=require("moment");
var fs=require("fs");

var user=process.argv[2];
var userName=process.argv[3]
var location=process.argv.slice(4);


function user(name, location){
    this.name=name;
    this.location=location;

}


function appendfile(){
    fs.appendFile(data.txt,"Name: "+userName+", "+"Location: "+location+"Date: ",function(err){
        if (err) {
            console.log(err);
          }
    })
}

function weatherSearch(){
user.prototype.weatherSearch=function(){
    weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        
       var weatherData=JSON.stringify(result, null, 2);


      });
    }
}

module.exports={
    user: user,
    appendfile: appendfile,

}