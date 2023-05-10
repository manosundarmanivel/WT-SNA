var http = require("http");
var dt = require("./my_module");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
   
    res.write("The Current Date and Time is :" +dt.myDateTime());
    let a =10;
    let b =20;
    res.write("<br />Additon : "+dt.add(a,b));
    res.write("<br />Subtarction :"+dt.sub(a,b));
    res.write("<br />Multiplication :"+dt.mult(a,b));
    res.write("<br />Division :"+dt.div(a,b));
    res.end();
}).listen(8050);