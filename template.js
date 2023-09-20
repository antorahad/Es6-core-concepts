const myName = 'Nur Ahad Sarker';
const myAge = 26;
const myEmail = 'gneahad@gmail.com';


const myInfo = 
`
My name is ${myName}.
I'm ${myAge} years old.
My email is ${myEmail}.
`;

console.log(myInfo);

const firstName = 'Md Golam Nur-E-Ahad';
const lastName = 'Sarker';

const fullName = `${firstName} ${lastName}`;

console.log(fullName);


const numbers = [10,20,30,40,50,60];

const sum = `The sum of ${numbers[3]} & ${numbers[5]} is ${numbers[3] + numbers[5]}`;

console.log(sum);


const person = {
    name: 'Nur Ahad',
    job: 'Web Developer',
    sallary: 20000
}


const detail = `${person['name']} is a junior ${person['job']}. His current sallary is ${person['sallary']}`;

console.log(detail);