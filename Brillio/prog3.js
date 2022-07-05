// var city = new String("All that glitters is not gold");

// var freq = {};
// for( let i = 0;i<city.length;i++){
//     if(freq[city[i]]==undefined)
//         freq[city[i]]= 1;
//     else
//         freq[city[i]]++;
// }

// console.table(freq);

// // console.log(Object.entries(freq));
// // sorting 

// freq = Object.entries(freq).sort((a,b) => b[1]-a[1] );

// result = {};
// for( x in freq){
//     result[x[0]] = x[1];
// }

// console.table(result);



// problem 2 : 
/*
write a program to take an email and findout it is valid or not and fo rthat check the following 

a ) email id must be having one @ and . symbols
b) there must be a domain like 'com ' 'org' 'co.in'
c)  email should not have anoy other special chracters  other than @ and . 
d)its lenght must not be more than 16 chars before '@' symbol

*/


let email  = new String("tnvrahmed98@gmail.com");


const check = (email) =>{
    let countsymbols = {'@' : 0, '.' : 0};
    for(let x of email){
        if(x==='@'|| x==='.') countsymbols[x]++;
        else if(x>='A' && x<='z' ||x>-'A' && x<='z' ||x>='0' && x<='9') continue;
        else countsymbols[x]++;
    }
    if(Object.keys(countsymbols).length>2) return false;
    if(countsymbols['@'] > 1 || countsymbols['.'] > 1) return false;
    let first  = email.split('@')[0];
    if(first.length > 16) return false;
    return email.includes(".com")||email.includes(".co.in")||email.includes(".org")? true: false;
}

console.log(check(email));

