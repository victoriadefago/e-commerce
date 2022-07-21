let response = prompt('Por favor ingresa tu nombre');

let users = [];

if(response){
    users.push(response);
}

if(response){
    let number = prompt('Hola ' + response +' ¡Atención! Por favor ingresa un número del 1 al 10');

    function noParesDeContarImparesHasta(number){
    
        let impares = 0;
        for(i=0; i<=number; i++){
           if(i%2!==0){ 
               impares++
           }
        }
        return impares;
    }

    if(number){
        if(number <= 10) {
        alert('Hemos contado ' + noParesDeContarImparesHasta(number) + ' números impares para llegar al número que ingresaste. Por lo tanto si comprás ' + number + ' productos tenés un descuento del ' + noParesDeContarImparesHasta(number) + '% en el total de tu compra!');
        }
    }

} else {
    let number = prompt('Hola visitante, ¡Atención! Por favor ingresa un número del 1 al 10');

    function noParesDeContarImparesHasta(number){
    
        let impares = 0;
        for(i=0; i<=number; i++){
           if(i%2!==0){ 
               impares++
           }
        }
        return impares;
    }
    
    if(number){
        if(number <= 10) {
        alert('Hemos contado ' + noParesDeContarImparesHasta(number) + ' números impares para llegar al número que ingresaste. Por lo tanto si comprás ' + number + ' productos tenés un descuento del ' + noParesDeContarImparesHasta(number) + '% en el total de tu compra!');
        }
    }
}

let products = [
    {
        id: 1,
        name: 'Cafetera Moulinex', 
        price: 6770, 
        discount: 0.4
    },
    {
        id: 2,
        name: 'MacBook Pro 2019',
        price: 230000,
        discount: 0.2
    },
    {
        id: 3,
        name: 'Samsung Galaxy S10',
        price: 70500,
        discount: 0.1
    },
    {
        id: 4,
        name: 'SmartTv Samsung 43"',
        price: 23200,
        discount: 0.05
    }
];

function Product(name, price, discount){
    this.name = name;
    this.price = price;
    this.discount = discount;
};

let iphone12 = new Product('Iphone 12', 68000, 0.02);

console.log(iphone12);

let length = products.length;
console.log(products.length);

let twoFirstProducts = products.slice(0,2);
console.log(twoFirstProducts);


let newProduct = {name:'Microondas Phillips', price:12000,discount:0.03};
console.log(newProduct)

products.push(newProduct);
console.log(products);


for(const product of products) {
    if(product.name.includes('MacBook Pro 2019')){
        let productSearch = product;
        console.log(productSearch);
    }
};


console.log(users.includes('Victoria Defagot'));




