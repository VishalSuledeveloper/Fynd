const express = require('express');
const userService = require("./basic_express");
//1.If there is 2 interdependent modules
//2.If there is express
//3. async-await
const app =express();

app.get("/users",async (req, res) => {
    try{
        const users= await userService.getUserData();//if there is dependency : thread safety
        responce.status(200).json(users);//users==null?

    }catch(error){
        console.log(error);
    }
});

app.listen(3000);
