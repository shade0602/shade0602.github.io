var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === "images/roger.png") {
		myImage.setAttribute ('src','images/roger2.png');
	} else {
		myImage.setAttribute ('src','images/roger.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Введите свое имя.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Brachypelima vagans милые, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Brachypelima vagans милые, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}