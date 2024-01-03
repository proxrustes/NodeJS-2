function read() {
    return { firstName: 'Mary', lastName: "Shelly", age: 45 };
  }
  
  function update({ name, age }) {
    return { firstName, lastName, age };
  }
  
  function options() {
    return { message: 'Options' };
  }
  
  export { read, update, options };