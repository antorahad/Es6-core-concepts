const loadData = () => {

    const searchInput = document.getElementById('search');

    const productContainer = document.getElementById('product-container');

    const searchBtn = document.getElementById('search-btn');

    fetch('../search/product.json')

    .then(res => res.json())

    .then(data => {
        phoneData = data;
    })

    .catch(err => {
        console.log("Error Data", err)
    })

    searchBtn.addEventListener('click', function(){
        const searchData = searchInput.value.toLowerCase();

        const filteredData = phoneData.filter(phone => phone.brand.toLowerCase().includes(searchData))

        displayResult(filteredData);
    });

    const displayResult = (data) => {
        productContainer.innerHTML = '';
        if (data.length === 0) {
            productContainer.innerHTML = 'No results found';
            return;
          }

          data.forEach(phone => {
            const innerDiv = document.createElement('div');
            innerDiv.innerHTML = `
            <p>${phone.brand}</p>
            `;
            productContainer.appendChild(innerDiv);
          })
    }
}

loadData()