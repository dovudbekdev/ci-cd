const express = require('express');

const app = express();

app.get("/hello", (req,res)=>{
    res.send("Salom");
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server ${PORT} da ishga tushdi`)
})