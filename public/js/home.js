let response = prompt('Por favor ingresa tu nombre');
let name = response

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

/*
let bank = prompt('Ingrese su banco y le contamos los descuentos exclusivos que tenemos el día de hoy para vos :)');

if(bank){
    switch(bank) {
        case "santander":
        case "Santander":
            alert('¡Disfruta hoy de un descuento del 8% con Banco Santander!');
            break;
        case "Galicia":
        case "galicia":
            alert('¡Disfruta hoy de un descuento del 8% con Banco Galicia!');
            break;
        case "Patagonia":
        case "patagonia":
        case "BBVA":
        case "bbva":
        case "Macro":
        case "macro":
            alert('¡Disfruta hoy de un descuento exclusivo del 5%!');
            break;
        default:
            alert('Disculpa, actualmente no contamos con descuentos para el banco ingresado');
            break;
    }
}
*/

let productsName = ['Cafetera Moulinex', 'MacBook Pro 2019', 'Samsung Galaxy S10', 'SmartTv Samsung 43"'];

let products = [
    {
        name: 'Cafetera Moulinex', 
        price: 6770, 
        discount: 0.4
    },
    {
        name: 'MacBook Pro 2019',
        price: 230000,
        discount: 0.2
    },
    {
        name: 'Samsung Galaxy S10',
        price: 70500,
        discount: 0.1
    },
    {
        name: 'SmartTv Samsung 43"',
        price: 23200,
        discount: 0.05
    }
];

let length = products.length;
console.log(products.length);

let twoFirstProducts = products.slice(0,2);
console.log(twoFirstProducts);

productsName.push('Microondas Phillips');
console.log(productsName);

let index = productsName.indexOf('Microondas Phillips');
console.log(index);

for(const product of products) {
    console.log(product.name);
};


