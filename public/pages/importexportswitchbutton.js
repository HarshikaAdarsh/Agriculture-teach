var btn = document.getElementById('btn')

const form = document.querySelector('#notFeatured');
const items = document.querySelector('#featured');

const body = document.querySelector('#body');

function leftClick() {
	btn.style.left = '0'
	form.style.display = "none";
	items.style.display = "block";
}

function rightClick() {
	btn.style.left = '110px'
	
	form.style.display = "block";
	items.style.display = "none";
}

