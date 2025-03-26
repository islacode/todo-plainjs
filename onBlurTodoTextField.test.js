const {onBlurTodoTextField} = require('./index');

describe('onBlurTodoTextField', () => {

    // When a valid text is entered and the field loses focus, it creates a span element with the text
    it('should create a span element with text when input field loses focus with valid text', () => {
      // Arrange
      document.body.innerHTML = '<ul><li><input type="text" value="Buy groceries" /></li></ul>';
      const inputElement = document.querySelector('input');
      const liElement = document.querySelector('li');
      const event = { target: inputElement };
  
      // Act
      onBlurTodoTextField(event);
  
      // Assert
      const spanElement = document.querySelector('span');
      expect(spanElement).not.toBeNull();
      expect(spanElement.textContent).toBe('Buy groceries');
      expect(spanElement.getAttribute('onClick')).toBe('onClickTodoText(event)');
      expect(liElement.contains(inputElement)).toBe(false);
      expect(liElement.contains(spanElement)).toBe(true);
    });

    // When the input field is empty (text is falsy), the function returns early without making changes
    it('should return early without making changes when input field is empty', () => {
      // Arrange
      document.body.innerHTML = '<ul><li><input type="text" value="" /></li></ul>';
      const inputElement = document.querySelector('input');
      const liElement = document.querySelector('li');
      const event = { target: inputElement };
  
      // Act
      onBlurTodoTextField(event);
  
      // Assert
      expect(document.querySelector('span')).toBeNull();
      expect(liElement.contains(inputElement)).toBe(true);
      expect(liElement.children.length).toBe(1);
    });
});
