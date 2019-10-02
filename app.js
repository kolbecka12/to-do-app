function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', function(event){
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement('li') // create empty <li></li> tag
    newLi.className = "toDoItem";

    let label = document.createElement('label');
    label.className = "mdl-checkbox mdl-js-checkbox";
    label.id = "checkbox_styling";


    let checkbox = document.createElement('input'); // creates the checkbox
    checkbox.type = "checkbox";
    checkbox.className = "checkbox_styling mdl-checkbox__input";


    let deleteBtn = document.createElement('button'); // creates the delete button
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect deleteBtn_styling";



    deleteBtn.addEventListener('click', function(event){
      // this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);

    })

    label.appendChild(checkbox);
    componentHandler.upgradeElement(label);


    newLi.append(label, title, deleteBtn);
    // newLi.appendChild(checkbox);
    // newLi.appendChild(label)
    // newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};


//why does newLI.append(label, title, deleteBtn) work, but putting each on their own line doesnt?
//how can I change width of checkbox, when this is coming from the MDL styling?

//keep primary and secondary styling, but try to just get the normal todo function working within the card -- WITHOUT
//MDL styling. Then add in styling to each element individually. Go back to basics.
//inspect the checkbox. why is it getting a big margin added around it? solve this first.
