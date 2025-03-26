const {addTodoElement} = require("./index");

describe('addTodoElement', () => {

    // Creates a new todo item with checkbox and text field when event target has a section parent
    it('should create a new todo item with checkbox and text field when event target has a section parent', () => {
      // Arrange
      const sectionElement = document.createElement('section');
      const buttonElement = document.createElement('button');
      sectionElement.appendChild(buttonElement);
  
      const event = {
        target: buttonElement
      };
  
      // Act
      addTodoElement(event);
  
      // Assert
      const listContainer = sectionElement.querySelector('ul');
      expect(listContainer).not.toBeNull();
  
      const todoElement = listContainer.querySelector('li');
      expect(todoElement).not.toBeNull();
  
      const checkbox = todoElement.querySelector('input[type="checkbox"]');
      expect(checkbox).not.toBeNull();
    });

    // Handles case when todoContainer is not found (returns early)
    it('should return early when todoContainer is not found', () => {
      // Arrange
      const event = {
        target: {
          closest: jest.fn().mockReturnValue(null)
        }
      };
      const createElement = jest.spyOn(document, 'createElement');
  
      // Act
      addTodoElement(event);
  
      // Assert
      expect(createElement).not.toHaveBeenCalled();
    });
});
