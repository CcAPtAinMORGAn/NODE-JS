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
