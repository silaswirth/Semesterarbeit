const todo = document.querySelector('.todos');

document.addEventListener('DOMContentLoaded', function () {
  // add todo form
  let forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {
    edge: 'left'
  });
});

const renderTodo = (data, id) => {
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
      <div class="todo-edit">
        <i class="material-icons" data-id="${id}">edit</i>
      </div>
    </div>
  `;
  todo.innerHTML += html;
};

// remove todo
const removeTodo = (id) => {
  const todo = document.querySelector(`.todo[data-id=${id}]`);
  console.log(todo);
  todo.remove();
};