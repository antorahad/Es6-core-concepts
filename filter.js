const scores = [12, 50, 65, 44, 15];
const result = scores.filter(score => score >= 30);
const result2 = scores.filter(score => score <= 30);
console.log(result, result2);

const friends = [
    {
        name: 'Kabir',
        age: 22,
    },
    {
        name: 'Jakir',
        age: 21,
    },
    {
        name: 'Akib',
        age: 23,
    },
    {
        name: 'Hasan',
        age: 25,
    },
    {
        name: 'Akib',
        age: 27,
    }
]

const below25 = friends.filter(friend => friend.age < 25);

console.log(below25);


const searchAkib = friends.filter(friend => friend.name === 'Akib');

console.log(searchAkib);


// filter gives you the matched value that will full fill the conditions