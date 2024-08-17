const fs =require("fs")

fs.readFile("demo.txt","utf-8",(err,txt)=>{

    if(err){
        console.log("Error Reading File : ",err);
        return
    }

    console.log(txt);
});
console.log("End of Program !!")