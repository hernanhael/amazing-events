import { getData } from './data.js';

const cardsContainer = document.getElementById("cards");
const filterForm = document.getElementById("form-filters");

let { currentDate, events } = await getData(); 


/* Checkbox & search filter */
function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

filterForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = getFormData(e.target);
  const selectedCategories = Object.keys(formData).filter(
    (key) => key !== "searcher"
  );
  const searchValue = formData.searcher.toLowerCase().trim();
  const cardsFilter = events.filter((event) => {
    const isCategoryInclude = selectedCategories.length
      ? selectedCategories.includes(event.category)
      : true;
    return event.name.toLowerCase().includes(searchValue) && isCategoryInclude;
  });
  createCard(cardsFilter);
});


/* Card display */
function createCard(arrayEvents) {
  cardsContainer.innerHTML = "";
  let cards = "";
  for (const event of arrayEvents) {
    cards += `<div class="card" style="width: 250px">
                <img src="${event.image}" class="card-img-top" alt="event-image"/>
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <a href="./pages/details.html?id=${event._id}" class="btn btn-dark">More Info</a>
                 </div>
              </div>`;
  }
  cardsContainer.innerHTML = cards;
}

createCard(events);




