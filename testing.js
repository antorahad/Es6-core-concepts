const products = ['Mobile', 'laptop', 'sunglass', 'Wallet', 'Mobile', 'Watch'];

const findMobile = products.filter(mobile => mobile === 'Mobile');

const findMobile2 = products.find(mobile => mobile === 'Mobile');

console.log(findMobile);
console.log(findMobile2, typeof findMobile2)



