

// const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '68cba2fba6msh9f5fdc2e429bba0p1bc93ajsn542f247a478b',
// 		'x-rapidapi-host': 'tasty.p.rapidapi.com'
// 	}
// };

// // Define an async function
// async function fetchRecipeData() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json(); // Change text() to json() for structured data
// 		console.log(result);
// 		displayRecipes(result.results);
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 	}
// }

// // Function to display the recipes on the HTML page
// function displayRecipes(recipes) {
// 	const container = document.getElementById("recipesContainer");

// 	// Clear the container before displaying new data
// 	container.innerHTML = "";

// 	// Loop through each recipe
// 	recipes.forEach(recipe => {
// 		// Create elements for the recipe details
// 		const recipeCard = document.createElement("div");
// 		recipeCard.className = "recipe-card";

// 		const title = document.createElement("h2");
// 		title.textContent = recipe.name || "No Title Available";

// 		const description = document.createElement("p");
// 		description.textContent = recipe.description || "No Description Available";

// 		const thumbnail = document.createElement("img");
// 		thumbnail.src = recipe.thumbnail_url || "";
// 		thumbnail.alt = recipe.name || "Recipe Image";

// 		// Append the elements to the recipe card
// 		recipeCard.appendChild(title);
// 		recipeCard.appendChild(description);
// 		recipeCard.appendChild(thumbnail);

// 		// Append the recipe card to the container
// 		container.appendChild(recipeCard);
// 	});
// }


// // Call the async function
// fetchRecipeData();

