const addForm = document.querySelector('.add'); //form element to add new todos at the bottom
const list = document.querySelector('.todos');  //ul of the todos
const search = document.querySelector('.search input'); //search form input

const generateTemplate = todo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html; 
}

addForm.addEventListener('submit', e => {
    e.preventDefault(); //prevent the form from being submitted automatically

    const todo = addForm.add.value.trim(); /*You cant add an emty todo in the form.
    Trims whitespaces*/ 
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();           // reset the form to its original state
    }
});

//Deleting Todos finds a class of delete and deletes the parent element
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});



const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'));
};

//keyup event on the ssearch box at the top
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();//get rids of the spaces
    filterTodos(term);

});

//that is the end
