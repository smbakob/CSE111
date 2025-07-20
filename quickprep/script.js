const body = document.body;
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');

lightModeBtn.addEventListener('click', () => {
  body.classList.remove('dark-mode');
});

darkModeBtn.addEventListener('click', () => {
  body.classList.add('dark-mode');
});

const container = document.getElementById('recipes-container');
const details = document.getElementById('recipe-details');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-details');

function getRandomRecipes(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('recipe-card');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View recipe for ${recipe.name}`);

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;

  card.appendChild(img);

  card.addEventListener('click', () => showDetails(recipe));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showDetails(recipe);
    }
  });

  return card;
}

function showDetails(recipe) {
  details.classList.add('visible');
  overlay.classList.add('visible');
  details.setAttribute('aria-hidden', 'false');

  document.getElementById('detail-name').textContent = recipe.name;
  const detailImage = document.getElementById('detail-image');
  detailImage.src = recipe.image;
  detailImage.alt = recipe.name;

  document.getElementById('detail-rating').textContent = recipe.rating;

  const ingredientsList = document.getElementById('detail-ingredients');
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(ing => {
    const li = document.createElement('li');
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  const instructionsList = document.getElementById('detail-instructions');
  instructionsList.innerHTML = '';
  recipe.instructions.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    instructionsList.appendChild(li);
  });
}

