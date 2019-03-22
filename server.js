var express = require('express');
var app = express();
var PORT = process.env.PORT || 3030;
app.use(express.static('dist/lms'));

app.get('/',(req,res)=>{
res.sendFile('dist/lms/index.html');
})

app.listen(PORT,()=>{
    console.log("Listening to PORT:"+ PORT + "...");
    
})
