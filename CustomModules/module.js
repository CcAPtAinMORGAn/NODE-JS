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


const armstrong = (number)=>{
    let numberOfDigits = number.length;
    let sum = 0;

    temp=number;
    
    while (temp > 0)
        {
        let remainder = temp % 10;

        sum += remainder ** numberOfDigits
        temp = parseInt(temp / 10); 

        }
 
        if (sum == number)
        {
            return `${number} : is an armstrong number`
        }
        else
        {
            return `${number} : is not an armstrong number`
        }
        
}


module.exports = {
    g:greet,
    s:sum,
    a:avg,
    ag:armstrong
}
module.exports.name = "Yash"


