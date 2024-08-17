const fs =require("fs")

let txt=fs.readFileSync("test.txt","utf-8");
// console.log(txt)
//console.log("End of Program !!")
// Replacing text in file test.txt


txt=txt.replace("Yash","Yash Vartak");
fs.writeFileSync("change.txt",txt);