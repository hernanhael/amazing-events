const cardsContainer = document.getElementById("cards");

function createCard(arrayEvents) {
  let cards = "";
  for (const event of arrayEvents) {
    cards += `<div class="card" style="width: 280px">
                <img src="${event.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <p class="card-date">Date: ${event.date}</p>
                   <p class="card-place">Place: ${event.place}</p>
                   <p class="card-capacity">Capacity: ${event.capacity}</p>
                   <p class="card-estimate">Estimate: ${event.assistance}</p>
                   <p class="card-price">$ ${event.price}</p>
                   <a href="./stats.html" class="btn btn-dark">More Info</a>
                 </div>
              </div> `;
  }
  return cards;
}

let cardsEvents = createCard(data.events);

cardsContainer.innerHTML = cardsEvents;


/* let myEvents = data.events;

let cardContainer = document.createDocumentFragment();
cardContainer.className = "wrap"
for(let event = 0; event < myEvents.length; event++) { 

    let image = document.createElement("img"); 
    image.src = myEvents[event].image;
    image.className="card-img-top";
    cardContainer.appendChild(image);

    let title = document.createElement("h5"); 
    title.className = "card-title"; 
    title.textContent = myEvents[event].name;
    cardContainer.appendChild(title);
   
    let category = document.createElement("p"); 
    category.className = "card-category"; 
    category.textContent = myEvents[event].category;
    cardContainer.appendChild(category);
   
    let description = document.createElement("p"); 
    description.className = "card-text"; 
    description.textContent = myEvents[event].description;
    cardContainer.appendChild(description);
  
    let date = document.createElement("p"); 
    date.className = "card-date"; 
    date.textContent = myEvents[event].date;
    cardContainer.appendChild(date);
  
    let place = document.createElement("p"); 
    place.className = "card-place"; 
    place.textContent = myEvents[event].place;
    cardContainer.appendChild(place);
   
    let capacity = document.createElement("p"); 
    capacity.className = "card-capacity"; 
    capacity.textContent = myEvents[event].capacity;
    cardContainer.appendChild(capacity);
   
    let assistance = document.createElement("p"); 
    assistance.className = "card-estimate"; 
    assistance.textContent = myEvents[event].assistance;
    cardContainer.appendChild(assistance);
   
    let price = document.createElement("p"); 
    price.className = "card-price"; 
    price.textContent = "Capacity " + myEvents[event].capacity;
    cardContainer.appendChild(price);
  
     let price = document.createElement("a"); 
    price.className = "card-price"; 
    price.href = "Capacity " + myEvents[event].capacity;
    cardContainer.appendChild(price);
}
card.appendChild(cardContainer); */