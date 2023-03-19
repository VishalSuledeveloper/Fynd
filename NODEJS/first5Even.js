//Create a callback function that will be called when
//read the first 5 even numbers from a file containing 
const fs= require('fs').promises;

//Reads the first five number from a file with the even 
async function readFirst5Even(){
    //reading the file with fs module
    const file =await fs.readFile("./demo.txt", "utf8");
    //converting the file which is buffer to string 
    const line= file.toString().split("\n");
    //iterating on the top five lines.
    for (let i=0;i<5;i++){
        console.log(line(i));
    }
}
readFirst5Even();