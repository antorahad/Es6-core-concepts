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

product ['discount'] = true;

product.details['touchDisplay'] = false;

console.log(product);


// JavaScript gives you two method to find values and keys of a object 1. Keys 2. Values
const productKeys = Object.keys(product);
const productInnerKeys = Object.keys(product['details']);

console.log(productKeys, productInnerKeys);


const productValue = Object.values(product);
const productInnerValue = Object.values(product.details);

console.log(productValue, productInnerValue);

// entries will give you both keys and values
console.log(Object.entries(product));


const person = {
    name: 'Nur Ahad Sarker',
    age: 26,
    profession: 'web developer'
}

console.log(person);
console.log(Object.entries(person));


// Delete a object property
delete person.name;
console.log(person)


//Freez a object from adding new value and removing current value
Object.freeze(person);

person['sallary'] = 20000;

delete person.profession

console.log(person);


//Seal allows you to add new value in a object but prevent you to delete a value

Object.seal(person);

person['sallary'] = 20000;

delete person.profession

console.log(person);




