const fs =require("fs")

fs.unlink("temp.txt",(err,txt)=>{

    if(err){
        console.log("Error Reading File : ",err);
        return
    }

    console.log("File Deleted Successfully");
});