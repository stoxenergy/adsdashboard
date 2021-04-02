var products = null;
var existings = null;
var retargetings = null;
var title = null;

// Called once the page has loaded
document.addEventListener('DOMContentLoaded', function(event) {
	loadProducts();
	loadExistings();
	loadRetargetings();
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

// Dynamics

function loadDynamics() {
	fetch(projectUrl + '/dynamics')
	.then((response) => response.json())
	.then(json => {
		this.dynamics = json.dynamics.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllDynamics();
	});
}

function drawDynamics(dynamics) {
	var template = Handlebars.compile(document.getElementById("dynamics-template").innerHTML);
	document.getElementById('dynamics-container').innerHTML = template({
		title: this.title,
		dynamics: dynamics	
	});
}

function showAllDynamics() {
	this.title = "All Dynamics";
	drawDynamics(this.dynamics);
}

// Retargetings

function loadRetargetings() {
	fetch(projectUrl + '/retargetings')
	.then((response) => response.json())
	.then(json => {
		this.retargetings = json.retargetings.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllRetargetings();
	});
}

function drawRetargetings(retargetings) {
	var template = Handlebars.compile(document.getElementById("retargetings-template").innerHTML);
	document.getElementById('retargetings-container').innerHTML = template({
		title: this.title,
		retargetings: retargetings	
	});
}

function showAllRetargetings() {
	this.title = "All Retargetings";
	drawRetargetings(this.retargetings);
}

// Existing

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
	var template = Handlebars.compile(document.getElementById("existings-template").innerHTML);
	document.getElementById('existings-container').innerHTML = template({
		title: this.title,
		existings: existings	
	});
}

function showAllExistings() {
	this.title = "All Existings";
	drawExistings(this.existings);
}
