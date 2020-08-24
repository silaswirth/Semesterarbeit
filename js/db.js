// enable offline data
db.enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('todos').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if (change.type === 'added') {
      console.log(change);
      renderTodo(change.doc.data(), change.doc.id);
    }
    if (change.type === 'removed') {
      removeTodo(change.doc.id);
    }
  });
});

// add new todo
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const todo = {
    titel: form.titel.value,
    beschreibung: form.beschreibung.value,
    datum: form.datum.value
  };

  db.collection('todos').add(todo)
    .catch(err => console.log(err));

  form.titel.value = '';
  form.beschreibung.value = '';
  form.datum.value = '';
});