var products = null;
var existings = null;
var title = null;

// Called once the page has loaded
document.addEventListener('DOMContentLoaded', function(event) {
	loadProducts();
	loadExistings();
});

// Replace this with your Sheety URL
// Make sure NOT to include the sheet name in the URL (just the project name!)
var projectUrl = 'https://api.sheety.co/a754727717e29386b98b0920c8596429/facebookAdsData';

function loadProducts() {
	fetch(projectUrl + '/products')
	.then((response) => response.json())
	.then(json => {
		this.products = json.products.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllProducts();
	});
}

function drawProducts(products) {
	var template = Handlebars.compile(document.getElementById("products-template").innerHTML);
	document.getElementById('products-container').innerHTML = template({
		title: this.title,
		products: products	
	});
}

function showAllProducts() {
	this.title = "All Products";
	drawProducts(this.products);
}

function loadExistings() {
	fetch(projectUrl + '/existings')
	.then((response) => response.json())
	.then(json => {
		this.existings = json.existings.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllExistings();
	});
}

function drawExistings(existings) {
	var template = Handlebars.compile(document.getElementById("products-template").innerHTML);
	document.getElementById('products-container').innerHTML = template({
		title: this.title,
		existings: existings	
	});
}

function showAllExisting() {
	this.title = "All Existing";
	drawProducts(this.existing);
}
