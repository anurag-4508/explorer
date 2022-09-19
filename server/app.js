const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express();
const port=80  //default port
const finalPath = path.join(__dirname,"..")


// built in middle ware for serving static webpages
app.use(express.static(finalPath))


app.get("/",(req,res)=>{
    res.send("file received")
})


app.listen(port,()=>{
    console.log("Port stating...")
});

