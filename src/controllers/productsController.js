const path = require('path');
const fs = require('fs');

let productsJSON = fs.readFileSync(path.join(__dirname, '../../public/data/products.json'), 'utf-8');
let products2 = JSON.parse(productsJSON);

const productsController = {

    products: function (req, res) {
        res.render(path.join(__dirname, '../views/home'), {products2});
    }

};

module.exports = productsController;