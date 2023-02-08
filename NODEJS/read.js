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







readUTF8File("V:/MEVN/Fynd/NODEJS/demo.txt") //existing file
// readUTF8File("./demo1.text") // non existing
// readUTF8File("./demo.text") //file with missing characters. 