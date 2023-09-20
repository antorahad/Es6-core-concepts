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

console.log(product.details.harddisk)

const data = [{name:'ahad', age:26, phone:'01754561968', gender:'male', address: 'eastern housing pallabi phase 2', city: 'mirpur', country:'bangladesh'}];

console.log(data[0].city);


const data2 = {
    name: 'phones',
    data: [
        {
            name: 'iphone 13 max pro',
            price: 80000,
            ram: 4,
            rom: '256gb'
        },
        {
            name: 'iphone 12 max pro',
            price: 70000,
            ram: 2,
            rom: '12gb'
        }
    ],

    instock: true
}


console.log(data2.data[1].price)

console.log(data2.data[0].ram)

console.log(data2.instock)