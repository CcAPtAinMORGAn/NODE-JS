const fs =require("fs")

fs.rename("demo1.txt","test.txt",(err,txt)=>{

    if(err){
        console.log("Error Reading File : ",err);
        return
    }

    console.log("Renamed");
});