const http =require('http');
const fs=require('fs');
const {url} = require('inspector');

const hostname='127.0.0.1';
const port = 3000;

//pages

const home=fs.readFileSync('home.html');
const about=fs.readFileSync('about.html');
const contact=fs.readFileSync('contact.html');
const services=fs.readFileSync('services.html');

const server=http.createServer((req,res)=>{
    console.log(req.url)

    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    if(req.url=='/' || req.url=='/home'){
        res.end(home);
    }
    else if(req.url=='/' || req.url=='/about'){
        res.end(about);
    }
    else if(req.url=='/' || req.url=='/contact'){
        res.end(contact);
    }
    else if(req.url=='/' || req.url=='/services'){
        res.end(services);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 not Found</h1>")
    }
})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});