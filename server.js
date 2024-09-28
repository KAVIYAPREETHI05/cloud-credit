const express=require('express');
const app=express();
const port=4000;

app.use(express.json());

app.listen(port,()=>{
    console.log(`server is Running on Ports:${port}`);
})

let users=[
    {
        name:'Test User 1',
        email:'testuser@gmail.com'
    }
]

app.get('/users',(req,res)=>{
    res.json(users);
})