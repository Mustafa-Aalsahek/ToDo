//selectors
const input = document.querySelector('.input');
const button = document.querySelector('.submit');
const list = document.querySelector('.list');
const select = document.querySelector('.filter')

button.addEventListener('click', addTodo)
list.addEventListener('click', compDel);
select.addEventListener('click',filter);
// Functions
function addTodo(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('listDiv');
    // new items
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = input.value;
    listDiv.appendChild(item);
    // complete btn
    const complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = "<i class='fas fa-check-circle'></i>";
    listDiv.appendChild(complete);
    // delete btn
    const Delete = document.createElement('button');
    Delete.classList.add('delete');
    Delete.innerHTML = "<i class='fas fa-trash-alt'></i></i>";
    listDiv.appendChild(Delete);

    list.appendChild(listDiv);
    // clear the input value
    input.value = '';

}
function compDel(e){
    const target = e.target;
    const todo = target.parentElement;
  //  console.log(e.target);
    // Delete
    if (target.classList[0] === "delete"){
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function (){
            todo.remove();
        })
    }
    if (target.classList[0] === "complete"){
        todo.classList.toggle('marked');
    }
}
function filter(e){
    const todos = list.childNodes;
    todos.forEach(function (todo){
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'done':
                if (todo.classList.contains('marked')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'progress':
                if (!todo.classList.contains('marked')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    })
}