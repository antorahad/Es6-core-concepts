// for of used for array 
const numbers = [1, 6, 8, 4];

for (const num of numbers){
    console.log(num);
}


const numbers2 = [12, 45, 75, 8];

for(const num of numbers2){
    console.log(num);
}


const friends = ['Nur Ahad', 'Kazi Fahim', 'Fahad', 'Palash', 'Zubair'];

for (const friend of friends){
    console.log(friend);
}


const products = [
    {name: 'Hp laptop', price: 150000, quantity: 2},
    {name: 'iphone 6s', price: 15000, quantity: 4},
    {name: 'Keyboard', price: 10000, quantity: 2},
    {name: 'Mouse', price: 5000, quantity: 3},
    {name: 'Web Camera', price: 1500, quantity: 5},
]


for(const product of products){
    console.log(product);
}

//for in loop used in object
const products2 = {
    name: 'Hp laptop',
    brand: 'Hp',
    color: 'Black',
    price: 75000,
    ram: 8,
    hd: 2,
    ssd: 256,
    instock: false
}

for (const key in products2){
    const value = products2[key];
    console.log(key, value);
}