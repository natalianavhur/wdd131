import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? '<span aria-hidden="true" class="icon-star">⭐</span>'
      : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<article class="recipe-card">
      <img src="${recipe.image}" alt="image of ${recipe.name}" class="recipe-image" />
      <div class="recipe-content">
          <header class="recipe-header">
              <p class="recipe-category">Entree</p>
              <h2 class="recipe-title">${recipe.name}</h2>
          </header>
          <div class="recipe-rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
              ${ratingTemplate(recipe.rating)}
          </div>
          <p class="recipe-description">
              ${recipe.description}
          </p>
      </div>
  </article>`;
}


function renderRecipes(recipeList) {
  const recipeContainer = document.getElementById('recipe-container');
  const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  recipeContainer.innerHTML = recipeHTML;
}

function filterRecipes(query) {
  return recipes
    .filter(recipe => {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name)); 
}

function searchHandler(event) {
  event.preventDefault(); 
  const query = document.getElementById('search-recipe').value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes); 
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

window.onload = init;

document.getElementById('search-button').addEventListener('click', searchHandler);
