// CREATE NODE JS MODULES  WITH BELOW FUNCTIONALITY 

// 1. One module calling the other 
// 2. Performing Closure
// 3. Accessing the FilesStream module to read contents of a text file
// 4. Creating a module to calculate the compound interest

var http = require('http');
var dt =require('./ownModule.js');

http.createServer(function(req,res){
    
    //res: response to a request(req)
    //response has 3 feature: head/body and Tail
    //Head: code indicating success or failure or any other status
    //200:success code,format: text/html,json.xml....
    res.writeHead(200,{'Context-Type':'text/html'});

    //update the body of the response: data coming from a different user created module
    res.write("The data and time are currently : " +dt.getCurrentDate());
    // res.write("\nTime are currently :" +dt.getCurrentTime());
    //date time is being fetched from the outside module
    //using the content type mentioned above as text/html user defined module
    res.write("\nThis program is running on port number 8000");

    res.end();//ending the write functionality for a request response function
}).listen(8000);//mentioning which port our application will run on the server

function foo()
{
    var b = 10;
    function inner(){
        
        return b;
    }
    return inner;
}
var get_func_inner = foo();  

  
console.log(get_func_inner());

//This code will help to read the file contents.
const fs =require('fs');
//UTF= Unicode Transformation Format
function readUTF8File(filePath) {

    fs.readFile(filePath, "utf-8", (data,error)=>{
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
        
    });

}

readUTF8File("V:/MEVN/Fynd/NODEJS/demo.txt")


// Creating a module to calculate 
var math= require('mathematics'); 
var x=4;
var y=2;
var z=x/y;
console.log("value of x is ;",x);
console.log("value of y is ;",y);
console.log("For finding quotient of any two number we just do x/y.\n So, We get :");
console.log("Quotient is :",z);
