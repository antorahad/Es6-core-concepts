const numbers = [1, 2, 3, 4];

console.log(numbers);

const [a, b, c, d] = numbers;

console.log (a);

console.log(b);

console.log(c);

console.log(d);


const product = {
    id : 1001,
    name: 'Hp laptop 151620',
    serial: 001151620,
    details: {
        processor: 'i5 7th gen',
        ram: '8gb',
        harddisk: '2tb',
        ssd: '256gb',
        gpu: 'intel hd graphics + amd ryzon'
    },
    color: 'Mat Black',
    price: 75000,
    instock: false
}


const {id, name, serial, details, price, instock} = product;

console.log(id , name, details['processor'], price, instock);



const cart = [
    {id:101, name: 'Mourse', price: 8000, quantity: 5},
    {id:102, name: 'keyboard', price: 12000, quantity: 2},
    {id:103, name: 'Monitor', price: 10000, quantity: 8},
    {id:104, name: 'Laptop', price: 80000, quantity: 1},
]


const [item1, itme2, item3, item4] = cart;

console.log(item1.price)
console.log(itme2.price)
console.log(item3.price)
console.log(item4.price)


const double = (num1, num2) => {
    return [num1 * 2, num2 * 2];
}

const [x, y] = double(2, 2);


console.log(x, y);