

// Defining the new element function 
function newElement(){
    var li = document.createElement("LI"); // create a list 
    li.className = "list-group-item";
    var text = document.getElementById('newTask').value; // retrieve the task text
    // checking if the text is empty or not 
    if( text == ""){
        alert("Please write something");
    }
    else{
        //Create a label of that text 
        var label = document.createElement("label");
        label.textContent = text;
        label.className = "form-check-label";

        //Create a checkbox 
        var checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.className="form-check-input";

        //Creating a close button for every list item 
        var close = document.createElement('span');
        var text2 = "\u00D7";
        close.textContent = text2;
        close.className = "close";

        //Appending
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(close);

        document.getElementById("list-group").appendChild(li);
    }
    document.getElementById("newTask").value = "";
}

//Access the submit button 
var submit = document.getElementById("button-addon2");
submit.addEventListener("click", newElement);

//Mouseover on task will make it yellow: FFCC70

var task = document.getElementById("list-group");
task.addEventListener("mouseover", function(event){
if(event.target.classList.contains("list-group-item")){
    event.target.style.backgroundColor =  "#DAD4B5";
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold";
}
});
let task2 = document.querySelector(".list-group");
    task2.addEventListener("mouseout", function(event){
        if(event.target.classList.contains("list-group-item")){
        event.target.style.backgroundColor =  "";
        event.target.style.color = "white";
        event.target.style.fontWeight = "";
        }
        });

//Adding click function to the list item itself which triggers the check 
var div = document.querySelector(".list-group");
div.addEventListener("click", function(event){
if( event.target.classList.contains("list-group-item")){
   var checkbox3 = event.target.querySelector(".form-check-input")
if( checkbox3.checked ){
    checkbox3.checked = false;
}
else{
    checkbox3.checked  = true;
}
}
});

var close3 = document.querySelector(".list-group");
div.addEventListener("click", function(event){
    if( event.target.classList.contains("close")){
       var parent = event.target.parentElement;
       parent.style.display = "none";
    }
    });
