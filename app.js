function onReady() {

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function renderTheUI(){
    const TODO_LIST = document.getElementById('toDoList');
    TODO_LIST.textContent = ''; // says that once a new todo item has been added, clear out the variable so you aren't always adding the same thing back with each new addition
    toDos.forEach(function(toDo) {
       const NEW_LI = document.createElement('li');
       NEW_LI.className = "toDoItem";

       const CHECKBOX = document.createElement('input');
       CHECKBOX.type = "checkbox";
       CHECKBOX.className = "checkbox_styling mdl-checkbox__input";

       let label = document.createElement('label');
       label.className = "mdl-checkbox mdl-js-checkbox";
       label.id = "checkbox_styling";

       const DELETE_BTN = document.createElement('button');
       DELETE_BTN.textContent = "Delete";
       DELETE_BTN.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect deleteBtn_styling";

       DELETE_BTN.addEventListener('click', event =>{
         toDos = toDos.filter(function(item){
           return item.id !== toDo.id; // filters thru todos. which ones don't match the ID of the one i just clicked delete for? this modifies the original array.
         })
         renderTheUI();
       });

       // CHECKBOX.addEventListener('click', event =>{
       //  if (CHECKBOX.checked == true){
       //    var boxChecked = true;
       //   }
       //  else {
       //    var boxChecked = false;
       //   }
       // })

       NEW_LI.textContent = toDo.title;
       TODO_LIST.appendChild(NEW_LI);
       NEW_LI.appendChild(label);
       label.appendChild(CHECKBOX);
       NEW_LI.appendChild(DELETE_BTN);

       componentHandler.upgradeElement(label);

    });
  }

  function createNewToDo() { //where we add stuff to our toDos array
    const NEW_TODO_TEXT = document.getElementById('newToDoText');

    if(!NEW_TODO_TEXT.value){ return; };

    toDos.push({
      title: NEW_TODO_TEXT.value, //title is your key or property here (same thing)
      complete: false, // with these, every todo will have the properties title & complete
      id: id
    });

    id++;

    NEW_TODO_TEXT.value = ""; // this empties the text input field when new todo is submitted
    renderTheUI();
  }

  ADD_TODO_FORM.addEventListener('submit', event => { //shorthand for function(event)
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

  };

window.onload = function() {
  onReady();
};
