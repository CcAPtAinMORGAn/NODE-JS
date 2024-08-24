const greet = (name)=>{
    return `Welcome to node.js custom modules : ${name}`

}

const sum = (num)=>{
    s=0
    num.forEach(element=>{
        s+=element
    });
    return s;
}

const avg = (num)=>{
    s=0
    num.forEach(element=>{
        s+=element
    });
    return s/num.length;
}

module.exports = {
    g:greet,
    s:sum,
    a:avg
}
module.exports.name = "Yash"

