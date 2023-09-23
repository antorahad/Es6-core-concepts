// False => falsy
const x = false ;
if (x){
    console.log('true');
}
else{
    console.log('false');
}

// (+) Number => truthy
const x2 = 4; 

if(x2){
    console.log(x2, 'true');
}
else{
    console.log(x2, 'false');
}

// (-)Number => truthy
const x3 = -4; 

if(x3){
    console.log(x3, 'true');
}
else{
    console.log(x3, 'false');
}

// 0 => falsy
const x4 = 0; 

if(x4){
    console.log(x4, 'true');
}
else{
    console.log(x4, 'false');
}

// String => truthy
const sttr = 'Nur Ahad Sarker';

if(sttr){
    console.log('true');
}
else{
    console.log('false');
}


// Empty string => falsy
const sttr2 = '';

if(sttr2){
    console.log('true');
}
else{
    console.log('false');
}

// Undefined => falsy
let value1 ;

if(value1){
    console.log('true');
}
else{
    console.log('false');
}

// Null => falsy
const value2 = null;
if(value2){
    console.log('true');
}
else{
    console.log('false');
}


// check falsy
const y = '';
if(!y){
    console.log('value is falsy');
}

// check truthy
const z = ' ';
if(!!z){
    console.log('value is truthy');
}