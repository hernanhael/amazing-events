import { getData } from './data.js';

const cardsContainer = document.getElementById("past-events-cards");
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
  let cards = "";
  for (const event of arrayEvents) {
    if(Date.parse(event.date) < Date.parse(currentDate)) {
    cards += `<div class="card" style="width: 280px">
                <img src="${event.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <p class="card-date">Date: ${event.date}</p>
                   <p class="card-place">Place: ${event.place}</p>
                   <p class="card-capacity">Capacity: ${event.capacity}</p>
                   <p class="card-estimate">Assistance: ${event.assistance}</p>
                   <p class="card-price">$ ${event.price}</p>
                   <a href="./stats.html" class="btn btn-dark">More Info</a>
                 </div>
              </div> `;
  }
}
  cardsContainer.innerHTML = cards;
}

createCard(events);


 