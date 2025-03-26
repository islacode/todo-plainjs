const {createTextFieldElement, onBlurTodoTextField} = require('./index');

describe('createTextFieldElement', () => {

    // Creates an input element with type 'text'
    it('should create an input element with type "text" and onBlur attribute', () => {
      const result = createTextFieldElement();
      // const setAttribute = jest.spyOn(global.document, 'setAttribute');
      //
      // expect(setAttribute).toHaveBeenCalledTimes(2)
  
      expect(result.tagName).toBe('INPUT');
      expect(result.type).toBe('text');
      expect(typeof result.onblur).toBe('function');
    });

    // Handles null or undefined text parameter by using default empty string
    it('should set value to empty string when text parameter is not provided', () => {
      // Act
      const result = createTextFieldElement();
  
      // Assert
      expect(result.value).toBe('');
  
      // Test with undefined
      const resultWithUndefined = createTextFieldElement(undefined);
      expect(resultWithUndefined.value).toBe('');
  
      // Test with null
      const resultWithNull = createTextFieldElement(null);
      expect(resultWithNull.value).toBe('');
    });
});
