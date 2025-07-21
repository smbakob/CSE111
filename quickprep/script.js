const body = document.body;
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');

lightModeBtn.addEventListener('click', () => {
  body.classList.remove('dark-mode');
});

darkModeBtn.addEventListener('click', () => {
  body.classList.add('dark-mode');
});


document.addEventListener("DOMContentLoaded", () => {
  const recipeBox = document.getElementById("recipe-of-the-day");
  if (!recipeBox || !window.recipes) return;

  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  recipeBox.innerHTML = `
    <div class="recipe-left">
      <h3>${randomRecipe.name}</h3>
      <p>${randomRecipe.rating}</p>
    </div>
    <div class="recipe-center">
      <img src="${randomRecipe.image}" alt="${randomRecipe.name}" />
    </div>
   
  `;
});

document.getElementById("search-input").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const recipes = document.querySelectorAll(".recipe-card");

  recipes.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    if (name.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
