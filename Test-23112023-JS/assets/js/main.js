document.addEventListener('DOMContentLoaded', function() {
    var data = [];  //declare data as empty array
});

const searchCountry = async (countryName) => {
    let url;
    if (countryName === 'all') {
        url = 'https://restcountries.com/v3.1/all';
    } else {
        countryName = document.getElementById('search-criteria').value; // Get value from input field only if not 'all'
        url = `https://restcountries.com/v3.1/name/${countryName}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};


const fillCountryList = async (data) => {
    //fill country-list-body with data
    var countries = document.getElementById("countries-list-body");                     //output
    var info = "";
    if(data.length>0){
        console.log(data);
        for (var index=0;index<data.length;index++){
            info += `
            <tr>
            <td>${data[index].name.common}</td>
            <td>${data[index].population}</td>
            </tr>
        `
        }
        countries.innerHTML=info;
    }
}

const fillRegionList = async (data) => {
    //fill country-list-body with data
    var regions = document.getElementById("region-list-body");                     //output
    //var info = "";
    if(data.length>0){
        console.log(data);
        const regionCounts = {};

        data.forEach(country => {
            const region = country.region || 'Other'; // Handle countries with no region as 'Other'
            regionCounts[region] = (regionCounts[region] || 0) + 1;
        });
        console.log(regionCounts);
        let info = '';
        for (const [region, count] of Object.entries(regionCounts)) {
            info += `
                <tr>
                    <td>${region}</td>
                    <td>${count}</td>
                </tr>
            `;
        }
        regions.innerHTML=info;
    }
}


const fillCountriesStatistics = async (data) => {
    const totalCountries = document.getElementById("total-countries");
    const totalCountriesPopulation = document.getElementById("total-countries-population");
    const averagePopulation = document.getElementById("average-population");

    totalCountries.innerHTML = data.length;
    totalCountriesPopulation.innerHTML = data.reduce((a, b) => a + b.population, 0);
    averagePopulation.innerHTML = data.reduce((a, b) => a + b.population, 0) / data.length;
}

const getCountries = async (countryName) => {
    // Prevent default form submission behavior
    event.preventDefault();
    try {
        const data = await searchCountry(countryName);
        console.log(data);
        if (data) { // Check if data is not undefined
            console.log(data);
            fillCountryList(data);
            fillCountriesStatistics(data);
            fillRegionList(data);
        } else {
            console.log('No data returned from searchCountry');
        }
    } catch (error) {
        console.error('Error in getCountries:', error);
    }
};
