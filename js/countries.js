const loadCountries = () => fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(data => showCountries(data));

loadCountries()

const showCountries = (counrties) => {
    // for (const country of counrties) {
    //     console.log(country.name)
    // }

    const countriesDiv = document.getElementById("countries");

    counrties.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("country")
        div.setAttribute("onclick", `showCountryDetail('${element.name}')`);

        const h3 = document.createElement("h3");

        h3.innerText = element.name;
        div.appendChild(h3);

        countriesDiv.appendChild(div)
    });
}

const showCountryDetail = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = countryDetail => {
    alert(countryDetail.name)
}