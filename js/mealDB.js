const showSearchResult = () => {
    const searchData = document.getElementById("inputField").value;


    // document.getElementById("inputField").value = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`


    fetch(url)
        .then(res => res.json())
        .then(data => searchResultShow(data.meals));


}

const searchResultShow = data => {
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent = "";
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="card">
                <img src="${element.strMealThumb}" class="card-img-top" alt="${element.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });
}