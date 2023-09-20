// Simple arrow function
const handleShowName = () => {
    console.log('My name is Nur Ahad Sarker');
}


handleShowName();

// Multiple arrow function inside in a arrow function
const handleInfo = () => {
    const handleName = () => {
        console.log('My name is Monkey D Luffy');
    }

    const handleGoal = () => {
        console.log('I will be the king pirates');
    }

    handleName();
    handleGoal();
}

handleInfo();


// Arrow function with single paremeter
const handleAge = age => {
    console.log('I am', age, 'years old');
}

handleAge(19);
handleAge(100);

const handleAddress = address => {
    console.log(address);
}

handleAddress('Bangladesh, Dhaka-1216');
handleAddress('India, Chennai');

//Arrow function with double or multiple perameter 
const calc = (num1, num2) =>{
    const sum = num1 + num2;
    const sub = sum - num1;
    const mul = sub * num2;
    console.log(mul);
}

calc(10, 5);
calc (100, 50);

const diffCalc = (num1, num2, num3, num4) => {
    const sum = num1 + num2;
    const sub  = sum - num3;
    const mul = sub * num4;
    const div = mul / num1;
    const total = (sum + sub + mul + div);
    console.log(total);
}

diffCalc(15, 10, 5, 2);


// Arrow function perameter with default value;
const handleSum = (num1, num2 = 5) => {
    const result = (num1 + num2);
    console.log(result);
}

handleSum(10, 15);
handleSum(15);


//Arrow function with return key word
const myName = name => {
    const output = name;
    return output;
}

const seeName = myName('Nur Ahad Sarker');

console.log(seeName);


