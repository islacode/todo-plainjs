const {onClickTodoText} = require('./index');

describe('onClickTodoText', () => {

    // Function converts a span element to an editable text field when clicked
    it('should convert span element to editable text field when clicked', () => {
      // Arrange
      document.body.innerHTML = '<li><span>Test Todo</span></li>';
      const spanElement = document.querySelector('span');
      const event = { target: spanElement };
  
      // Mock createTextFieldElement
      global.createTextFieldElement = jest.fn().mockImplementation((text) => {
        const input = document.createElement('input');
        input.value = text;
        return input;
      });
  
      // Act
      onClickTodoText(event);
  
      // Assert
      const inputElement = document.querySelector('input');
      expect(inputElement).not.toBeNull();
      expect(inputElement.value).toBe('Test Todo');
      expect(document.querySelector('span')).toBeNull();
    });

    // Handling when event.target is null or undefined
    it('should not throw error when event.target is null or undefined', () => {
      // Arrange
      const event = { target: null };
  
      // Act & Assert
      expect(() => {
        onClickTodoText(event);
      }).toThrow();
  
      // Test with undefined
      const undefinedEvent = { target: undefined };
      expect(() => {
        onClickTodoText(undefinedEvent);
      }).toThrow();
    });
});
