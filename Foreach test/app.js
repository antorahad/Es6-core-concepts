const displayData = () => {
    const products = [
        {
            id: 101,
            pname: 'Hp Laptop 2100063',
            brand: 'Hp',
            color: 'Black',
            ram: 8,
            hardDisk: '2tb',
            ssd: 256,
            price: 75000,
            inStock: true
        },
        {
            id: 102,
            pname: 'Hp Laptop 2100069',
            brand: 'Hp',
            color: 'Silver',
            ram: 12,
            hardDisk: '2tb',
            ssd: 120,
            price: 95000,
            inStock: true
        },
        {
            id: 103,
            pname: 'Lenevo Laptop 1200063',
            brand: 'Lenevo',
            color: 'Silver',
            ram: 4,
            hardDisk: '1tb',
            ssd: false,
            price: 55000,
            inStock: true
        },
        {
            id: 104,
            pname: 'Asus Laptop 5400163',
            brand: 'Asus',
            color: 'Black',
            ram: 16,
            hardDisk: '2tb',
            ssd: 256,
            price: 125000,
            inStock: true
        },
        {
            id: 105,
            pname: 'Dell Laptop 2200066',
            brand: 'Dell',
            color: 'White Gray',
            ram: 4,
            hardDisk: '2tb',
            ssd: 120,
            price: 70000,
            inStock: true
        }
    ]

    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('product-card')
        innerDiv.innerHTML = `
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

displayData()