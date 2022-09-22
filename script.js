const todoButton = document.getElementById("addTodo");
const todoMain = document.getElementById("todoContainer");
const inputField = document.getElementById("textField");


todoButton = addEventListener("click", function() {
    var paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling");
    paragraph.innerHTML = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener( "click",  function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.hover("paragraph-styling")
    })
    paragraph.addEventListener( "dblclick", function() {
        todoContainer.removeChild(paragraph);
    }

    )
}
)