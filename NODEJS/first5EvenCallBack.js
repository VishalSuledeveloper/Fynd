const fs =require("fs");
//Callback function to read file data
// @param{Error} error 
// @param{buffer} fileData
// @returns void


function readFirstFiveCallback(error, fileData){
    if(error){
        console.log(error);
        return;
    }

    //converting the fileData which is buffer to string and splitting by line
    const Lines = fileData.toString().split("\n");
    //slice the Lines to the first five and log time
    Lines.slice(0,5).forEach((line)=>{
        console.log(line);
    })
}fs.readFile("V:/MEVN/Fynd/NODEJS/Data.xlsx", readFirstFiveCallback);