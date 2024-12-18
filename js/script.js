

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
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// Call the async function
fetchRecipeData();