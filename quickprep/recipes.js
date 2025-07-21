




window.recipes = [

  {
    name: "Avocado Toast",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Whole wheat bread, ripe avocado, salt, pepper, cherry tomatoes (optional).",
    image: "images/avocado-toast.jpg",
    
  },
  {
    name: "Veggie Stir-Fry",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Mixed veggies (carrots, broccoli, bell peppers), garlic, soy sauce, olive oil, rice.",
    image: "images/vegetable-stirfry.jpg",
    
  },
  {
    name: "Chickpea Salad",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Canned chickpeas, cucumber, tomatoes, red onion, lemon juice, olive oil.",
    image: "images/chickpea.jpg",
   
  },
  {
    name: "Oatmeal with Fruit",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Rolled oats, milk or water, mixed berries, honey.",
    image: "images/oatmeal-with-fruit.jpg",
    
  },
  {
    name: "Baked Sweet Potato & Black Beans",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Sweet potato, black beans, cumin, chili powder, avocado or cheese (optional).",
    image: "images/baked potato.jpg",
    
  },
  {
    name: "Lentil Soup",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Dry lentils, carrots, celery, onion, garlic, vegetable broth, spices.",
    image: "images/lentil.jpg",
    
  },
  {
    name: "Greek Yogurt Parfait",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Greek yogurt, granola, honey, fresh fruit.",
    image: "images/yogurt-parfait.jpg",
    
  },
  {
    name: "Quinoa Salad",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Quinoa, cherry tomatoes, cucumber, parsley, lemon juice, olive oil.",
    image: "images/quinoa-salad.jpg",
    
  },
  {
    name: "Vegetable Omelette",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Eggs, bell peppers, onions, spinach, cheese (optional).",
    image: "images/veggie-omelette.jpg",
    
  },
  {
    name: "Black Bean Tacos",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Black beans, taco seasoning, corn tortillas, lettuce, salsa.",
    image: "images/black-bean-tacos.jpg",
    
  },
  {
    name: "Banana Peanut Butter Smoothie",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Banana, peanut butter, milk (or plant milk), honey.",
    image: "images/banana-smoothie.jpg",
    
  },
  {
    name: "Stuffed Bell Peppers",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Bell peppers, rice, black beans, tomato sauce, cheese (optional).",
    image: "images/stuffed-peppers.jpg",
    
  },
  {
    name: "Whole Wheat Pasta with Marinara",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Whole wheat pasta, marinara sauce, garlic, basil, parmesan (optional).",
    image: "images/wholewheat-pasta.jpg",
    
  },
  {
    name: "Sweet Potato & Kale Hash",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Sweet potatoes, kale, onion, garlic, olive oil.",
    image: "images/sweetpotato-kale.jpg",
    
  },
  {
    name: "Cucumber & Tomato Salad",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Cucumber, tomatoes, red onion, olive oil, vinegar, salt, pepper.",
    image: "images/cucumber-tomato-salad.jpg",
    
  },
  {
    name: "Turkey & Veggie Wrap",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Whole wheat tortilla, sliced turkey, lettuce, tomato, mustard.",
    image: "images/turkey-wrap.jpg",
    
  },
  {
    name: "Chia Seed Pudding",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Chia seeds, milk or plant milk, vanilla extract, honey, berries.",
    image: "images/chia-pudding.jpg",
    
  },
  {
    name: "Homemade Hummus & Veggies",
    rating: "⭐⭐⭐⭐⭐",
    ingredients: "Chickpeas, tahini, lemon juice, garlic, olive oil, carrot sticks.",
    image: "images/hummus-veggies.jpg",
    
  },
  {
    name: "Fruit & Nut Trail Mix",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Mixed nuts, dried fruit, seeds.",
    image: "images/OIP.webp",
    
  },
  {
    name: "Baked Oatmeal Cups",
    rating: "⭐⭐⭐⭐☆",
    ingredients: "Rolled oats, milk, banana, cinnamon, baking powder, berries.",
    image: "images/baked-oatmeal-cups-iowagrileats-11.jpgS",
    
  }
];

const grid = document.getElementById('recipes-grid');

recipes.forEach(recipe => {
  const card = document.createElement('div');
  card.classList.add('flip-box');

  card.innerHTML = `
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="flip-box-back">
        <h3>${recipe.name}</h3>
        <p>${recipe.rating}</p>
        <p>${recipe.ingredients}</p>
        
      </div>
    </div>
  `;

  grid.appendChild(card);
});

