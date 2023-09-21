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

const below25 = friends.find(friend => friend.age < 25);
const searchAkib = friends.find(friend => friend.name === 'Akib');
console.log(below25);
console.log(searchAkib);

//Find gives you the first matched value;