//import { products } from './products.js';
import products from '../data/products.json' assert {type: 'json'};

let store = JSON.parse(localStorage.getItem('store')) ?? [];

//let totalPrice = store.reduce((acumulator, product) => acumulator + product.price, 0);
document.getElementById('store-quantity').innerHTML = `${store.length}`;


products.forEach((product) => {

    const idButton = `add-product${product.id}`;
    const addProduct = `add-product${product.id}`;

    document.getElementById('products').innerHTML +=

        `<article>
                        <div class="add-product" id="${addProduct}">
                            <button class="button" id="${idButton}" data-id="${product.id}">+</button>
                        </div>
                            <img src="${product.img}" alt="${product.alt}" class="product_img">
                        <div class="main-article">
                            <i class="fas fa-truck"></i>
                            <p class="price"> ${product.price} </p>
                            <p class="discount"> ${product.discount} </p>
                            <h4 class="description"> ${product.name} </h4>
                        </div>
                    </article>`
});


products.forEach((product) => {

    const idButton = `add-product${product.id}`;
    const addProduct = `add-product${product.id}`;
    const productDecrease = `decrease${product.id}`;
    const productIncrease = `increase${product.id}`;


    document.getElementById(idButton).addEventListener('click', (e) => {

        const event = e.target;

        let productID = event.getAttribute('data-id');

        let productIndex = products.findIndex(product => product.id === parseInt(productID));
        let product = products[productIndex];

        store.push(product);

        localStorage.setItem('store', JSON.stringify(store));
        //let totalPrice = store.reduce((acumulator, product) => acumulator + product.price, 0)

        document.getElementById('store-quantity').innerHTML = `${store.length}`;

    });


    document.getElementById(idButton).addEventListener('click', (e) => {

        Swal.fire({
            title: `${product.name}`,
            text: `Producto agregado exitosamente`,
            icon: 'success',
            confirmButtonText: 'Continuar'
        });

    });

    
    document.getElementById(idButton).addEventListener('click', () => {

        const productDecrease = `decrease${product.id}`;
        const productIncrease = `increase${product.id}`;

        document.getElementById(addProduct).innerHTML =
                                    
                                `<div class="counter">
                                    <button type="button" class="decrease" id="${productDecrease}">
                                        <i class="fas fa-angle-down"></i>
                                    </button>
                                    <span class="units" value="1">1</span>
                                    <button type="button" class="increase" id="${productIncrease}">
                                        <i class="fas fa-angle-up"></i>
                                    </button>
                                </div>`

        document.getElementById(productIncrease).addEventListener('click', () => {
            document.querySelector('.units').innerHTML = 'test';
        });

    });


    /*
    document.getElementById(idButton).addEventListener('click', function() => {
        store.push(product);
    });
    */

});



function increment() {
    data = data + 1;
    document.querySelector('.units').innerText = data;
}