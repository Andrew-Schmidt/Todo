const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
	if(inputBox.value === ''){
		alert("please add a task");
	}
	else{
		console.log(inputBox.value)
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = ""
	savedata();
}
inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
		}
	}
)
listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		savedata();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		savedata();
	}
}, false);
function savedata(){
	localStorage.setItem("data", listContainer.innerHTML);

}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data")
}
showTask();