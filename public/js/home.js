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



