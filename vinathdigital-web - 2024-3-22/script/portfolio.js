// select all filter button and filterable card #####

const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
// console.log(filterButtons, filterableCards)


// Define the filterCard function #####
const filterCards = e => {
  document.querySelector(".activexxx").classList.remove("activexxx");
  e.target.classList.add("activexxx");
  console.log(e.target);


// interate over each filterable card 
filterableCards.forEach(card => {
  // add "hide" class to hide the initialy
  card.classList.add("hide");
  
  //check if the card match the selected filter or "all" is slected
  if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
    card.classList.remove("hide");
  }
});
};



// Add click event listner to each filter button #####
filterButtons.forEach(button => button.addEventListener("click", filterCards ));