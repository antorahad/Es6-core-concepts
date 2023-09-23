const product = {
    name: 'iphone 6s',
    brand: 'apple',
    chipset: 'a4',
    ram: 2,
    camera: '12mp + 5mp',
    color: ['Silver Gray', 'Roes Gold'],
    price: 15000,
    rom: [8, 16, 32, 64],
    instock: false
}

const productString = JSON.stringify(product);

console.log(productString, typeof productString);

const productParse = JSON.parse(productString);

console.log(productParse, typeof productParse);