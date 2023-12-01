var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to fetch country data
function fetchCountryData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetching data from the URL
            const response = yield fetch('https://restcountries.com/v3.1/all');
            // Checking if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parsing the JSON data
            const data = yield response.json();
            // Handling the data (here, just logging it to the console)
            console.log(data);
        }
        catch (error) {
            // Handling any errors
            console.error('Error fetching data: ', error);
        }
    });
}
// Call the function to fetch the data
fetchCountryData();
