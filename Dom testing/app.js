const addCart = () => {
    const container = document.getElementById('container');

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('product-card');

    innerDiv.innerHTML = `
                <div class="image">
                    <h4>Image</h4>
                </div>
                <h1>Product Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut similique aliquam nihil esse neque iste eveniet ratione modi qui.</p>
    `;
    container.appendChild(innerDiv);
}