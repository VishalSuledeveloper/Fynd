var http = require('http');
var dt =require('./ownModule.js');
var mt =require('./main');

    http.createServer(function(req,res){
    
        //res: response to a request(req)
        //response has 3 feature: head/body and Tail
        //Head: code indicating success or failure or any other status
        //200:success code,format: text/html,json.xml....
        res.writeHead(200,{'Context-Type':'text/html'});
        res.write("Program running on port number 8001");
    
        //update the body of the response: data coming from a different user created module
        res.write("\nThe data and time are currently : " +dt.getCurrentDate());
        
        // res.write("\nTime are currently :" +dt.getCurrentTime());
        //date time is being fetched from the outside module
        //using the content type mentioned above as text/html user defined module
    
        res.end();//ending the write functionality for a request response function
    }).listen(8001);//mentioning which port our application will run on the server

