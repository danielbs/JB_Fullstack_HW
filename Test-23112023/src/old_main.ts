/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/

import productFormListener from "./event-listeners/product-form-listener.js";
import productsListener from "./event-listeners/products-table.js";
import Country from "./interfaces/country.js";
import { reduceAverageRating, reduceProducts, reduceSmartphonesAveragePrice, reduceTotalPrice } from "./reducers/products.js";
import { presentAverageRating, presentNumberOfProducts, presentProductsTable, presentSmartphonesAveragePrice, presentTotalPrice } from "./ui/products.js";

(async () => {
    // initialization
    //document.getElementById('products-table-body').addEventListener('click', productsListener)
    //document.getElementById('add-product-form').addEventListener('submit', productFormListener)

    // get data
    const response = await fetch('https://restcountries.com/v3.1/all');
    console.log(response);
    interface CountriesResponse {
        countries: Country[],
    }
    const json: CountriesResponse = await response.json();
    const countries: Country[] = json.countries;
    console.log(countries);
    // prepare data for presentation

    // prepare table

})();

