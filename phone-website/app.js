let phoneData = [];

const loadData = () => {
    fetch('../phone-website/phones.json')
    .then(res => res.json())
    .then(data => {
        phoneData = data;
        displayData(phoneData);
    });
}

const displayData = (data) => {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    data.forEach(phone => {
        const {brand, model, storage, color, price, display_size, camera_resolution, operating_system, battery_capacity, release_date} = phone;
        const innerDiv = document.createElement('div');
        innerDiv.innerHTML = `
            <center>
                <h1>${model}</h1>
                <p>Brand: ${brand}</p>
                <p>Price: $ ${price}</p>
                <button>View Details</button>
            </center>
        `;
        container.appendChild(innerDiv);
    })
}


const searchPhone = () => {
    const searchbar = document.getElementById('search-input');

    const searchValue = searchbar.value;

    const {brand} = phoneData;

    if(brand == searchValue){
        return displayData(brand);
    }

    
    
}

loadData()