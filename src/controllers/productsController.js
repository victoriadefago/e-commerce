const path = require('path');
const fs = require('fs');

let productsJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse(productsJSON);


const productsController = {

    products: function (req, res) {
        res.render(path.join(__dirname, '../views/home'), {products});
        console.log(products);
    }

};

module.exports = productsController;