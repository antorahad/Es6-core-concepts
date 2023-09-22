const loadData = () => {
    fetch('product.json')
    .then(res => res.json())
    .then(data => displayData(data))
}


const displayData = data => {
    const productContainer = document.getElementById('product-container');
    data.forEach(product => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('product-card')
        innerDiv.innerHTML=  `
        <div>
        <img src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt=''></img>
        </div>
        <h1>${product.pname}</h1>
        <p>Brand: ${product.brand}</p>
        <p>Color: ${product.color}</p>
        <p>Ram: ${product.ram}</p>
        <p>Harddisk: ${product.hardDisk}</p>
        <p>SSD: ${product.ssd ? product.ssd : 'No'}</p>
        <p>Price: ${product.price}</p>
        <p>InStock: ${product.inStock ? 'Yes' : 'No'}</p>
        <div>
            <button>Add Cart</button>
        </div>
    `;
    productContainer.appendChild(innerDiv)
    })
}

loadData();