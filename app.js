function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', function(event){
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement('li') // create empty <li></li> tag
    newLi.className = "toDoItem";

    let checkboxLabel = document.createElement('label');
    checkboxLabel.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";

    let checkbox = document.createElement('input'); // creates the checkbox
    checkbox.type = "checkbox";
    checkbox.className = "mdl-checkbox__input checkbox_styling";
    checkbox.id = "list-checkbox-1";


    // <!-- <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
    //   <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
    // </label> -->

    let deleteBtn = document.createElement('button'); // creates the delete button
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect deleteBtn_styling";

    let primaryContent = document.createElement('span');
    primaryContent.className = "primary–span";

    let secondaryContent = document.createElement('span');
    // secondaryContent.className = "mdl-list__item-secondary-action";


    deleteBtn.addEventListener('click', function(event){
      // this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);

    })

    // checkboxLabel.appendChild(checkbox);
    // primaryContent.appendChild(checkboxLabel);
    // primaryContent.textContent(title);
    // newLi.appendChild(primaryContent);
    // newLi.appendChild(secondaryContent);


    // thing I tried, but didn't work:

    // newLi.textContent = title;
    // newLi.appendChild(checkboxLabel);
    // checkboxLabel.appendChild(checkbox);


    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};




//keep primary and secondary styling, but try to just get the normal todo function working within the card -- WITHOUT
//MDL styling. Then add in styling to each element individually. Go back to basics.
//inspect the checkbox. why is it getting a big margin added around it? solve this first.
