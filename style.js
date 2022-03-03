// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listenser, todoButton
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);  
//filterOption.addEventListener("click", filterTodo);


// JSON 
// const todoJson_h3 = document.createElement("h3");
// const todoJson_p = document.createElement("p");


// console.log( resultJson)
// todoJson_p.classList.add("todo-Json_p");
// todoJson_p.innertext = resultJson.address;
// todoJson_h3.classList.add("todo-Json_h3");
// todoJson_h3.innerText = resultJson.name;

// todoJson_h3.appendChild(todoJson);
// todoJson_p.appendChild(todoJson)


// Functions
function addTodo (event){
    event.preventDefault();
    console.log(123)
    
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    
    // todo li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);// appendChild

    // check button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);// appendChild
    
    // delete  button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);// appendChild
    
    // apeend to list
    todoList.appendChild(todoDiv);// appendChild

    // delete todoInput values
    todoInput.value = "";
}
 
function deleteCheck (e){
    const item = e.target;
    console.log(e.target);
    // delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.remove();       
    }
    
    // Check complete
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

// function filterTodo(){
//     const todos = todoList.childNodes;
//     console.log(todos)
// };

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
       return response.json();

    })
    .then(data => {
        console.log(typeof data);
        console.log( data);

        var A = data.map((data1) => {
            return `    
            <div class="JasonContainer">        
            <h3 class="abc">${data1.name}</h3>
            <h5 class="abc">${data1.phone}</h5><br>
            </div>
            `
        });
        document.getElementById("todo-Json").innerHTML = A.join("");
        return A;
    })
    .then(a => {
        console.log(a)
        function onlick (){
            var submitOnclick = document.querySelector('#submit');
            submitOnclick.addEventListener("click",() => {
                alert("vsdjkbdsj")
            })
        }
    })
    .catch(err => {
        console.log("that bai")
    })
    .finally(done => {
        console.log("thanhncong")
    })

    const data = { username: 'example' };




  