

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '68cba2fba6msh9f5fdc2e429bba0p1bc93ajsn542f247a478b',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

// Define an async function
async function fetchRecipeData() {
	try {
		const response = await fetch(url, options);
		const result = await response.json(); // Change text() to json() for structured data
		console.log(result);

		const firstRecipe = recipes[0];
		document.getElementById('recipe-name').textContent = firstRecipe.name;
		document.getElementById('recipe-description').textContent = firstRecipe.description;
		document.getElementById('view-recipe').addEventListener('click', () => showRecipeDetails(firstRecipe));

	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

function showRecipeDetails(recipe) {
	document.getElementById('recipe-details').innerHTML = `
		<h3>Recipe name</h3>
		<p id="recipe-name">${recipe.name}</p>
		<h3>Description</h3>
		<p id="recipe-description">${recipe.description}</p>
		<h4>Ingredients</h4>
		<p id="ingredients">${recipe.ingredients.join(', ')}</p>
		<h4>Steps</h4>
		<p id="steps">${recipe.instructions}</p>
	`;
}

// Call the async function
fetchRecipeData();

