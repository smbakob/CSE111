
import recipes from './recipes.mjs';

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[getRandomNumber(list.length)];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span class="label">${tag}</span>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true">⭐</span>`;
    } else {
      html += `<span aria-hidden="true">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <section class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="info">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </section>
  `;
}

function renderRecipes(recipeList) {
  const container = document.querySelector('main');
  const html = recipeList.map(recipeTemplate).join('');
  container.innerHTML = html;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  const lowerQuery = query.toLowerCase();
  return recipes
    .filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(lowerQuery)) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(lowerQuery))
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector('input[type="text"]').value;
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}



window.addEventListener('DOMContentLoaded', init);
