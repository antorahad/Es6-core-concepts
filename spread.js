// How to find largest number from numbers
const maxNUmbers = Math.max(10, 12, 45, 78, 4, 1, 89, 20);
console.log(maxNUmbers, typeof maxNUmbers);


// Is it applicable for array also ?

const maxArray = Math.max([10, 12, 45, 78, 4, 1, 89, 20]);
console.log(maxArray, typeof maxArray);

//(As you can see that this method is not working on array directly)

//Let's try to solve this problem using spread operator 

const numbers = [10, 12, 45, 78, 4, 1, 89, 20];

const maxArray2 = Math.max(...numbers);

console.log(numbers, maxArray2)


// ... This operator make a copy of the array and treat it as a number


//  Use spread operator for copy

const nums = [1, 4, 7, 9];

const nums2 = [...nums];

nums2.push(69);

console.log(nums, nums2);



const friend = ['Khalifa', 'Julekha', 'Monjulika', 'Risika', 'Farista'];

friend.push('Mia');

const copyFriend =  [...friend];

copyFriend.push('Malcova');


console.log(friend, copyFriend);


// By using spread operator we can copy and set value of an array or object 
const group = [
    {name: 'Nur Ahad', age: 26, gender: 'male'},
    {name: 'Kazi Fahim', age: 27, gender: 'male'},
    {name: 'Wale Fahad', age: 26, gender: 'male'},
    {name: 'Plus Mondol', age: 27, gender: 'male'},
    {name: 'Gonesh Thakur', age: 30, gender: 'male'},
]

console.log(group);

const copyGroup = [...group, {name: 'Chan mia', age: 37, gender: 'male'}];

console.log(copyGroup);



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


console.log(product);



const copyProduct = {...product, discount: 'true'};
copyProduct['id'] = 1002;

console.log(copyProduct);