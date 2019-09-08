document.addEventListener("DOMContentLoaded", () => {

    

    const form = document.querySelector('#new-item-form');
    form.addEventListener("submit", handleForSubmit);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete List";
    const body = document.querySelector('body');
    body.appendChild(deleteButton);

    const handleButtonClick = function (event) {
        const cityList = document.querySelector("#city-list");
        cityList.innerHTML = "";
    }

    deleteButton.addEventListener("click", handleButtonClick);

})

const handleForSubmit = function (event) {
    event.preventDefault()

    const cityList = document.querySelector("#city-list");
    const newListItem = document.createElement('li');
    const aTag = document.createElement("a");
    aTag.setAttribute('href', `https://en.wikipedia.org/wiki/${event.target.city.value}`);
    aTag.innerText = "wiki";
    aTag.target = "_blank";

    const breaker = document.createElement("br");

    newListItem.textContent = `Continent: ${event.target.continent.value}`
        + " /" + `Country: ${event.target.country.value}`
        + " /" + `City: ${event.target.city.value}`
        + " /" + `${event.target.status.value}`;

    newListItem.classList.add('city-list-item');

    cityList.appendChild(newListItem);
    newListItem.appendChild(breaker);
    newListItem.appendChild(aTag);

    document.getElementById('new-item-form').reset()

}