import { getRecipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const recipeList = document.getElementById('recipe-list');
  const recipes = getRecipes();

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('article');
    recipeCard.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="images/${recipe.image}" alt="${recipe.name}">
      <p>${recipe.description}</p>
    `;
    recipeList.appendChild(recipeCard);
  });
});
