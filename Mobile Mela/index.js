const phones = [
    {
        id: 1,
        brand: "Apple",
        mobileName: "iPhone 13 Pro",
        mobilePrice: 999.99,
        features: ["A15 Bionic Chip", "Super Retina XDR Display", "Triple Camera System", "5G Capable", "MagSafe Technology"]
    },
    {
        id: 2,
        brand: "Samsung",
        mobileName: "Galaxy S21",
        mobilePrice: 899.99,
        features: ["Exynos 2100 Processor", "Dynamic AMOLED 2X Display", "Triple Camera System", "5G Capable", "Wireless DeX"]
    },
    {
        id: 3,
        brand: "Google",
        mobileName: "Pixel 6",
        mobilePrice: 799.99,
        features: ["Google Tensor Processor", "OLED Display", "Dual Camera System", "5G Capable", "Android 12"]
    },
    {
        id: 4,
        brand: "OnePlus",
        mobileName: "9 Pro",
        mobilePrice: 799.00,
        features: ["Snapdragon 888 Processor", "Fluid AMOLED Display", "Quad Camera System", "5G Capable", "OxygenOS"]
    },
    {
        id: 5,
        brand: "Xiaomi",
        mobileName: "Mi 11",
        mobilePrice: 699.99,
        features: ["Snapdragon 888 Processor", "AMOLED Display", "Triple Camera System", "5G Capable", "MIUI 12"]
    },
    {
        id: 6,
        brand: "Sony",
        mobileName: "Xperia 1 III",
        mobilePrice: 1099.99,
        features: ["Snapdragon 888 Processor", "4K OLED Display", "Triple Camera System", "5G Capable", "Cinematography Pro"]
    },
    {
        id: 7,
        brand: "LG",
        mobileName: "G8 ThinQ",
        mobilePrice: 499.00,
        features: ["Snapdragon 855 Processor", "OLED Display", "Dual Camera System", "4G LTE", "Boombox Speaker"]
    },
    {
        id: 8,
        brand: "Motorola",
        mobileName: "Moto G Power",
        mobilePrice: 199.99,
        features: ["Snapdragon 662 Processor", "HD+ Display", "Triple Camera System", "4G LTE", "5000mAh Battery"]
    },
    {
        id: 9,
        brand: "Huawei",
        mobileName: "P40 Pro",
        mobilePrice: 899.00,
        features: ["Kirin 990 Processor", "OLED Display", "Quad Camera System", "5G Capable", "EMUI 10"]
    },
    {
        id: 10,
        brand: "Nokia",
        mobileName: "9 PureView",
        mobilePrice: 599.00,
        features: ["Snapdragon 845 Processor", "Penta Camera System", "OLED Display", "4G LTE", "Android One"]
    },
    {
        id: 11,
        brand: "Asus",
        mobileName: "ROG Phone 5",
        mobilePrice: 999.99,
        features: ["Snapdragon 888 Processor", "AMOLED Display", "Triple Camera System", "5G Capable", "AirTrigger 5"]
    },
    {
        id: 12,
        brand: "Oppo",
        mobileName: "Find X3 Pro",
        mobilePrice: 1099.99,
        features: ["Snapdragon 888 Processor", "AMOLED Display", "Quad Camera System", "5G Capable", "ColorOS 11"]
    },
    {
        id: 13,
        brand: "Realme",
        mobileName: "8 Pro",
        mobilePrice: 299.99,
        features: ["Snapdragon 720G Processor", "Super AMOLED Display", "Quad Camera System", "4G LTE", "65W SuperDart Charge"]
    },
    {
        id: 14,
        brand: "Vivo",
        mobileName: "V21",
        mobilePrice: 399.00,
        features: ["MediaTek Dimensity 800U", "AMOLED Display", "Triple Camera System", "5G Capable", "FunTouch OS"]
    },
    {
        id: 15,
        brand: "Xiaomi",
        mobileName: "Redmi Note 10",
        mobilePrice: 249.99,
        features: ["Snapdragon 678 Processor", "Super AMOLED Display", "Quad Camera System", "4G LTE", "MIUI 12"]
    },
    {
        id: 16,
        brand: "OnePlus",
        mobileName: "Nord CE 5G",
        mobilePrice: 349.00,
        features: ["Snapdragon 750G Processor", "AMOLED Display", "Triple Camera System", "5G Capable", "OxygenOS"]
    },
    {
        id: 17,
        brand: "Google",
        mobileName: "Pixel 5a",
        mobilePrice: 449.99,
        features: ["Snapdragon 765G Processor", "OLED Display", "Dual Camera System", "5G Capable", "Android 12"]
    },
    {
        id: 18,
        brand: "Sony",
        mobileName: "Xperia 5 III",
        mobilePrice: 999.99,
        features: ["Snapdragon 888 Processor", "OLED Display", "Triple Camera System", "5G Capable", "Cinematography Pro"]
    },
    {
        id: 19,
        brand: "Motorola",
        mobileName: "Razr 5G",
        mobilePrice: 1399.00,
        features: ["Snapdragon 765G Processor", "Foldable OLED Display", "Dual Camera System", "5G Capable", "Retro Design"]
    },
    {
        id: 20,
        brand: "Nokia",
        mobileName: "3310",
        mobilePrice: 49.99,
        features: ["2G Connectivity", "Snake Game", "Indestructible", "Long Battery Life", "Legendary"]
    }
];


const displayPhone = (count) => {
    const container = document.getElementById('phone-container');
    container.innerHTML = '';

    phones.slice(0,count).forEach(phone => {
        const innerDiv = document.createElement('div');
        innerDiv.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${phone.mobileName}</h2>
                <p>Brand: ${phone.brand}</p>
                <p>Price: $ ${phone.mobilePrice}</p>
                <div class="card-actions justify-start">
                <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
        `;
        container.appendChild(innerDiv);
    })
}

const searchPhone = () => {
    const input = document.getElementById('search-input');
    const searchValue = input.value.toLowerCase();

    const container = document.getElementById('phone-container');
    container.innerHTML = '';

    const filterPhone = phones.filter(phone => phone.brand.toLowerCase().includes(searchValue) || phone.mobileName.toLowerCase().includes(searchValue));

    if(filterPhone.length > 0){
        filterPhone.forEach(filterPhone => {
            const innerDiv = document.createElement('div');
            innerDiv.innerHTML = `
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">${filterPhone.mobileName}</h2>
                        <p>Brand: ${filterPhone.brand}</p>
                        <p>Price: $ ${filterPhone.mobilePrice}</p>
                        <div class="card-actions justify-start">
                        <button class="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                `;
            container.appendChild(innerDiv);
        })    
    }else{
        const innerDiv = document.createElement('div');
        innerDiv.innerHTML = `
        <div class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Opps! No data has been found</span>
      </div>
        `;

        container.appendChild(innerDiv);
    }
}

const showAll = () => {
    displayPhone(phones.length);
}

document.getElementById('search-btn').addEventListener('click', searchPhone); 
displayPhone(8)
