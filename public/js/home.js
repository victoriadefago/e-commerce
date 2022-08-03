let store = JSON.parse(localStorage.getItem('store')) ?? [];
let totalPrice = store.reduce((acumulator, product) => acumulator + product.price, 0);
document.getElementById('store-quantity').innerHTML = `${store.length}`;


let products = [
    {
        id: 1,
        name: 'Cafetera Moulinex', 
        price: '$6770', 
        discount: '4% off',
        img: 'images/img-cafetera-moulinex.jpg',
        alt: 'Cafetera Moulinex'
    },
    {
        id: 2,
        name: 'MacBook Pro 2019',
        price: '$230000',
        discount: '2% off',
        img: 'images/img-macbook-pro-2019.jpg',
        alt: 'MacBook Pro 2019'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S10',
        price: '$70500',
        discount: '1% off',
        img: 'images/img-samsung-galaxy-s10.jpg', 
        alt: 'Samsung Galaxy S10'
    },
    {
        id: 4,
        name: 'SmartTv Samsung 43"',
        price: '$23200',
        discount: '5% off',
        img: 'images/img-tv-samsung-smart.jpg',
        alt: 'SmartTv Samsung 43"'
    }
];

products.forEach((product) => {

    const idButton = `add-product${product.id}`;
    document.getElementById('products').innerHTML +=

                    `<article>
                        <div class="add-product">
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

    document.getElementById(idButton).addEventListener('click', (e) => {
        const event = e.target;
        let productID = event.getAttribute('data-id');
        
        let productIndex = products.findIndex(product => product.id === parseInt(productID));
        let product = products[productIndex];

        store.push(product);
        console.log(store);

        localStorage.setItem('store', JSON.stringify(store));
        let totalPrice = store.reduce((acumulator, product) => acumulator + product.price, 0)

        document.getElementById('store-quantity').innerHTML = `${store.length}`;


    });

    /*
    document.getElementById(idButton).addEventListener('click', function() => {
        store.push(product);
    });
    */

});










