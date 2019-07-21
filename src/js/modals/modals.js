// container of grid images projects
const projectsContainer = document.querySelector('.projects');

projectsContainer.addEventListener('click', e => {

    e.preventDefault();

    // closest btn light to the click event
    const modalToggle = e.target.closest('.btn-light');
 
    if (! modalToggle) return

    // select the appropriate modal 
    const selectedModal = modalToggle.parentNode.nextElementSibling;
   // and its close btn
    const closeButton = selectedModal.querySelector('.modal-close');

    selectedModal.classList.add('is-open');

    closeButton.addEventListener('click', _ => {
        selectedModal.classList.remove('is-open');
    })

    window.addEventListener('click', clickOutside);
    function clickOutside(e) {
         
        if (e.target == selectedModal) {
            //modals.style.display = 'none';
            selectedModal.classList.remove('is-open');
        }
    }
})

/////////

// modal to-to-list (2)

// SVG HTML
let completeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>`;
let removeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`;

// local storage: todo and completed
let data = (localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : {
    todo: [],
    completed: []
};


renderTodoList();

// get elements
// const addBtn = document.getElementById("add-item");
// console.log(data);

// add events

document.getElementById("add-item").addEventListener("click", () => {
    const input = document.getElementById("input").value;
    if (input) {

        addBtn(input);
        // // run function to add item
        // insertItem(input);

        // document.getElementById("input").value = "";

        // document.getElementById("input").focus();

        // // add item to local storage
        // data.todo.push(input);

        // // data storage function: call when we manipulate the dom, add - remove items
        // dataStorage();
    } 
});

document.getElementById("input").addEventListener("keyup", (event) => {

    let value = event.target.value;

    if(event.code === "Enter" && value) {

        addBtn(value);
        //console.log(value);
        // // run function to add item
        // insertItem(input);

        // document.getElementById("input").value = "";

        // document.getElementById("input").focus();

        // // add item to local storage
        // data.todo.push(input);

        // // data storage function: call when we manipulate the dom, add - remove items
        // dataStorage();
    }
});

function addBtn(input) {
    // run function to add item
    insertItem(input);

    document.getElementById("input").value = "";

    document.getElementById("input").focus();

    // add item to local storage
    data.todo.push(input);

    // data storage function: call when we manipulate the dom, add - remove items
    dataStorage();
}

function renderTodoList() {
    if(!data.todo.length && !data.completed.length) return;

    for (let i = 0; i < data.todo.length; i++) {
        let value = data.todo[i];
        insertItem(value);
    }

    for (let j = 0; j < data.completed.length; j++) {
        let value = data.completed[j];
        insertItem(value, true);
    }
}


// data storage function: call when we manipulate the dom, add - remove items
function dataStorage() {
    // add the array with data stringified
    localStorage.setItem("todoList", JSON.stringify(data));

}

// this within a jQuery event handler maps to event.currentTarget for direct event handlers, and usually event.target for delegated event handlers. 

// function remove item
function removeItem(event) {
    // console.log(event.target);
    // console.log(this);
    // console.log(this.parentNode.parentNode);
    // li item
    let item = this.parentNode.parentNode;
    // ul
    let parent = item.parentNode;

    let id = parent.id;
    let value = item.innerText;

    if( id === "todo") {
        // remove item from todo or completed storage;
    data.todo.splice(data.todo.indexOf(value), 1);
     
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }

    // data storage function: call when we manipulate the dom, add - remove items
    dataStorage();
    parent.removeChild(item);
}

// function toggle complete item
function completeItem() {
    // li item
    let item = this.parentNode.parentNode;
    // ul
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;
    console.log(item);
    console.log(parent);
    console.log(id);
    console.log(value);

    if( id === "todo") {
        // storage - remove item from todo list; add to completed list
        console.log(value);
    data.todo.splice(data.todo.indexOf(value), 1);
    // if(data.completed.indexOf(value) === -1) 
    data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }
    
    // console.log(data);

    // data storage function: call when we manipulate the dom, add - remove items
    dataStorage();
    // check if item completed or todo
    let target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");

    // remove from one and add to the other
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

// function add new items to the list
function insertItem(item, completed) {
    let list = (completed) ? document.getElementById("completed") : document.getElementById("todo");

    // create li element; innerHTML not recommanded
    let newItem = document.createElement("li");
    newItem.innerText = item;
    // newItem.innerHTML = item;
    // console.log(item);

    // create button elements and add class buttons
    let buttons = document.createElement("div");
    buttons.classList.add("buttons-6");

    // create button elements
    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = removeSVG;

    // remove event - this will point to it
    remove.addEventListener("click", removeItem);

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = completeSVG;

    // event completed: move item to completed list and back
    complete.addEventListener("click", completeItem);

    buttons.appendChild(complete);
    buttons.appendChild(remove);

    newItem.appendChild(buttons);
    // list.appendChild(newItem);
    list.insertBefore(newItem, list.childNodes[0]);
}

document.getElementById("clear").addEventListener("click", () => {
    localStorage.removeItem("todoList"); 
    document.getElementById("completed").innerHTML = "";
    document.getElementById("todo").innerHTML = "";
});

// modal - 3 - 