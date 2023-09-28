const loadData = () => {
    fetch('https://raw.githubusercontent.com/antorahad/Es6-core-concepts/main/Api%20project/product.json')
    .then(res => res.json())
    .then(phones => displayData(phones))
}

const displayData = (phones) => {
    const container = document.getElementById('container');

    phones.forEach(phone => {
        const {
            id,
            phone_name,
            brand,
            features,
            price,
            color,
            instock_status
        } = phone;

        const [featureOne, featureTwo, featureThree] = features;

        const innerDiv = document.createElement('div');

        innerDiv.classList.add('card')
        innerDiv.innerHTML = `
            <h1>${phone_name}</h1>
            <p>Brand: ${brand}</p>
            <p>Price: ${price}$</p>
            <h3>Features:</h3>
            <ul>
                <li>Processor: ${featureOne}</li>
                <li>Display: ${featureTwo}</li>
                <li>Camera: ${featureThree}</li>
            </ul>
            <p>Color: ${color}</p>
            <p>Stock: ${instock_status? 'Avaiable' : 'Out of Stock'}</p>
        `;

        container.appendChild(innerDiv)
    })
}

// const handleSearch = () => {
//     const search = document.getElementById('search');
//     const searchText = search.value;
    
// }

loadData();