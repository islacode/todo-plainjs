function addTodoElement(event) {
  const todoContainer = event.target.closest('section');
  const listContainer = todoContainer.querySelector('ul');

  if (!todoContainer) {
    return;
  }

  if (!listContainer) {
    const newListElement = document.createElement('ul');
    todoContainer.append(newListElement);
  }

  const newTodoElement = document.createElement('li');

  const newTodoTextField = document.createElement('input');
  newTodoTextField.setAttribute('type', 'text');

  const newTodoCheckbox = document.createElement('input');
  newTodoCheckbox.setAttribute('type', 'checkbox');

  newTodoElement.append(newTodoCheckbox, newTodoTextField);
  listContainer.append(newTodoElement)
}

(function() {
  const buttonList = document.querySelectorAll('section button');
  buttonList.forEach(button => {
    button.addEventListener('click', addTodoElement);
  });
})()