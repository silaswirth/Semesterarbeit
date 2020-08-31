const todo = document.querySelector('.todos');

document.addEventListener('DOMContentLoaded', function () {
  // add todo form
  let forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {
    edge: 'left'
  });
});

const renderTodo = (data, id) => {
  let todoelement = document.createElement("div")
  const html = `
    <div class="card-panel todo white row" data-id="${id}">
       <div class="todo-details">
        <div class="todo-titel">${data.titel}</div>
        <div class="todo-beschreibung">${data.beschreibung}</div>
        <div class="todo-datum"> ${data.datum}</div>
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
     </div>
  `;
  todoelement.innerHTML = html;
  todo.appendChild(todoelement);
  const todoContainer = todoelement.querySelector('.todo-delete');
todoContainer.addEventListener('click', evt => {
  if (evt.target.tagName === 'I') {
    const id = evt.target.getAttribute('data-id');
    console.log(id);
    db.collection('todos').doc(id).delete();
  }
})
};

// remove todo
const removeTodo = (id) => {
  const todo = document.querySelector(`.todo[data-id=${id}]`);
  console.log(todo);
  todo.remove();
};