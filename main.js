var sports = null;
var sportsWomen = null;
var sportsMen = null;
var DailyWomen = null;
var DailyMen = null;
var dailys = null;
var dynamics = null;
var existings = null;
var retargetings = null;
var title = null;

// Called once the page has loaded
document.addEventListener('DOMContentLoaded', function(event) {
	loadSportsWomen();
	loadSportsMen();
	loadDailys();
	loadDynamics();
	loadExistings();
	loadRetargetings();
});

// Replace this with your Sheety URL
// Make sure NOT to include the sheet name in the URL (just the project name!)
var projectUrl = 'https://api.sheety.co/a754727717e29386b98b0920c8596429/facebookAdsData';

// Sports Women

function loadSportsWomen() {
	fetch(projectUrl + '/sportsWomen')
	.then((response) => response.json())
	.then(json => {
		this.sportsWomen = json.sportsWomen.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllSportsWomen();
	});
}

function drawSportsWomen(sportsWomen) {
	var template = Handlebars.compile(document.getElementById("sports-women-template").innerHTML);
	document.getElementById('sports-women-container').innerHTML = template({
		title: this.title,
		sportsWomen: sportsWomen	
	});
}

function showAllSportsWomen() {
	this.title = "All Sports Women";
	drawSportsWomen(this.sportsWomen);
}

// Sports Men

function loadSportsMen() {
	fetch(projectUrl + '/sportsMen')
	.then((response) => response.json())
	.then(json => {
		this.sportsMen = json.sportsMen.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllSportsMen();
	});
}

function drawSportsMen(sportsMen) {
	var template = Handlebars.compile(document.getElementById("sports-men-template").innerHTML);
	document.getElementById('sports-men-container').innerHTML = template({
		title: this.title,
		sportsMen: sportsMen	
	});
}

function showAllSportsMen() {
	this.title = "All Sports Men";
	drawSportsMen(this.sportsMen);
}

// Daily Women

function loadDailyWomen() {
	fetch(projectUrl + '/dailyWomen')
	.then((response) => response.json())
	.then(json => {
		this.dailyWomen = json.dailyWomen.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllDailyWomen();
	});
}

function drawDailyWomen(dailyWomen) {
	var template = Handlebars.compile(document.getElementById("daily-women-template").innerHTML);
	document.getElementById('daily-women-container').innerHTML = template({
		title: this.title,
		dailyWomen: dailyWomen	
	});
}

function showAllDailyWomen() {
	this.title = "All Daily Women";
	drawDailyWomen(this.dailyWomen);
}

// Daily Men

function loadDailyMen() {
	fetch(projectUrl + '/dailyMen')
	.then((response) => response.json())
	.then(json => {
		this.dailyMen = json.dailyMen.sort((a, b) => {
			return a.votes < b.votes;
		})
		showAllDailyMen();
	});
}

function drawDailyMen(dailyMen) {
	var template = Handlebars.compile(document.getElementById("daily-men-template").innerHTML);
	document.getElementById('daily-men-container').innerHTML = template({
		title: this.title,
		dailyMen: dailyMen	
	});
}

function showAllDailyMen() {
	this.title = "All Daily Men";
	drawDailyMen(this.dailyMen);
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
