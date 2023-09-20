const friends = ['Ahad', 'Fahim', 'Fahad', 'Palash', 'Jubabir', 'Munni'];

const result  = friends.map(friend => friend);

console.log(result);

const peoples = [
    {
        name: 'Nur Ahad',
        profession: 'Web Developer',
        sallary: 25000,
    },
    {
        name: 'Kazi Fahim',
        profession: 'Marketing Manager',
        sallary: 30000,
    },
    {
        name: 'Jakir Ahamed',
        profession: 'Teacher',
        sallary: 45000,
    },
    {
        name: 'Fatima Khanom',
        profession: 'Digital Marketar',
        sallary: 25000,
    }
]

const result2 = peoples.map(people => people.sallary);
const result3 = peoples.map(people => people.name);
console.log(result3, result2);