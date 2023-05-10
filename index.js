const fs = require("fs");
const http = require("http");
const request = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal=(tempVal,orgVal)=>{
  let temprature =tempVal.replace("{%tempval%}",(orgVal.main.temp-273).toFixed(2));
   temprature =temprature.replace(" {%tempmin%}",(orgVal.main.temp_min-273).toFixed(2));
   temprature =temprature.replace("{%tempmax%}",(orgVal.main.temp_max-273).toFixed(2));
   temprature =temprature.replace("{%location%}",orgVal.name);
   temprature =temprature.replace("{% country %}",orgVal.sys.country);
   return temprature;

}
const server = http.createServer((req, res) => {
if(req.url="/"){
  request(
    "https://api.openweathermap.org/data/2.5/weather?q=jhansi&appid=57bccf5451bb6ba3d382c539623eac29"
  )

  .on("data",chunk=>{
    const objdata=JSON.parse(chunk);
    const arrData=[objdata];
 //console.log(arrData[0].main.temp);
 const realTimeData=arrData
 .map((val)=> replaceVal(homeFile,val))
 .join("");
 
 res.write(realTimeData);
 //console.log(realTimeData);
  })
  .on("end",err=>{
    if(err)
    return console.log("connection closed",err);
    res.end();
  });
  }
 
});

server.listen( 4000,"127.0.0.1",()=>{
  console.log('listening to the port number 80')
});
// learning ssh set up from vinod bahadur thapa..thapa technical.... al mamun


