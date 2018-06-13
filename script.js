var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		deleteListAfterClick();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListAfterClick() {
	var li = document.querySelectorAll("li");
	li.forEach(function(item) {
		item.addEventListener('click', function() {
			item.classList.toggle('done');
		});
		var deleteButton = item.children[0];
		deleteButton.addEventListener('click', function() {
			item.parentElement.removeChild(item);
		})
	});
}

deleteListAfterClick();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



