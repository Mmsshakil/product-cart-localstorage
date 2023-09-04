const addProduct = () =>{
    const productName = document.getElementById('product-name');
    const product = productName.value;
    const productQuantity = document.getElementById('product-quantity');
    const quantity = productQuantity.value;

    productName.value = '';
    productQuantity.value = '';
    console.log(`${product} : ${quantity}`);

    const productList = document.getElementById('productList');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productList.appendChild(li);

}