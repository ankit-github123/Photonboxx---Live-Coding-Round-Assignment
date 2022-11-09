const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const obj = {
  success: true,
  message: 'Hello World'
};


app.get('/',async (req,res)=> {
    return res.status(200).json(obj);
})

const getData = async () => {
  const res = await axios.get('http://localhost:3000');
  return res;
}

console.log(getData());
app.listen(PORT,()=> {
  console.log("Working on Port 3000");
})
//1. Create an endpoint which returns the above object as json with a status 200.

// Your code here

// listen on port mentioned.

//2. Write a function which makes a request to the above endpoint and prints the response in console. You can use any library for making the request.

// Your code here

//3. Write a program which takes n as input and prints nth fibonacci number


