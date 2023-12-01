/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    // initialization
    //document.getElementById('products-table-body').addEventListener('click', productsListener)
    //document.getElementById('add-product-form').addEventListener('submit', productFormListener)
    // get data
    const response = yield fetch('https://restcountries.com/v3.1/all');
    console.log(response);
    const json = yield response.json();
    const countries = json.countries;
    console.log(countries);
    // prepare data for presentation
    // prepare table
}))();
export {};
