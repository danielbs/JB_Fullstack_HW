// Function to fetch country data
async function fetchCountryData() {
    try {
        // Fetching data from the URL
        const response = await fetch('https://restcountries.com/v3.1/all');
        
        // Checking if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the JSON data
        const data = await response.json();

        // Handling the data (here, just logging it to the console)
        console.log(data);
    } catch (error) {
        // Handling any errors
        console.error('Error fetching data: ', error);
    }
}

// Call the function to fetch the data
fetchCountryData();
