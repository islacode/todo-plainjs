function addTodoElement(event) {
  const todoContainer = event.target.closest('section');
  let listContainer = todoContainer.querySelector('ul');

  if (!todoContainer) {
    return;
  }

  if (!listContainer) {
    listContainer = document.createElement('ul');
    todoContainer.append(listContainer);
  }

  const newTodoTextField = createTextFieldElement()
  const newTodoElement = document.createElement('li');
  const newTodoCheckbox = document.createElement('input');
  newTodoCheckbox.setAttribute('type', 'checkbox');

  newTodoElement.append(newTodoCheckbox, newTodoTextField);
  listContainer.append(newTodoElement)
}

function createTextFieldElement(text = '') {
  const newTodoTextField = document.createElement('input');
  newTodoTextField.setAttribute('type', 'text');
  newTodoTextField.setAttribute('onBlur', 'onBlurTodoTextField(event)');

  newTodoTextField.value = text;

  return newTodoTextField;
}

function onBlurTodoTextField(event) {
  const text = event.target.value;

  if (!text) {
    return;
  }

  const todoListElement = event.target.closest('li');
  const textContainer = document.createElement('span');
  textContainer.setAttribute('onClick', 'onClickTodoText(event)');
  textContainer.textContent = text;

  todoListElement.removeChild(event.target);
  todoListElement.appendChild(textContainer);
}

function onClickTodoText(event) {
  const text = event.target.textContent;
  const todoListElement = event.target.closest('li');
  const textContainer = createTextFieldElement(text);

  todoListElement.removeChild(event.target);
  todoListElement.appendChild(textContainer);
}

(function() {
  const buttonList = document.querySelectorAll('section button');
  buttonList.forEach(button => {
    button.addEventListener('click', addTodoElement);
  });
})()