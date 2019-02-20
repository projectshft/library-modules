// write your code here to make the tests pass
const Library = function() {
  const books = [];
  
  const addBook = function(book) {
    books.push(book);
  }

  const checkOutBook = function(book) {
    books.forEach(item => {
      if(item === book) {
        item.setAttribute("checkedOut", true);
      }
    });
  }

  const returnBook = function(book) {
    books.forEach(item => {
      if(item === book) {
        item.setAttribute("checkedOut", false);
      } 
    })
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
}

const Book = function(title, author) {

  const attributes = {
    title: title, 
    author: author, 
    checkedOut: false};

  const getAttribute = function(prop) {
    if(attributes.hasOwnProperty(prop)) {
      return attributes[prop];
    }
  }

  const setAttribute = function(prop, value) {
    
    if(attributes.hasOwnProperty(prop)) {
      attributes[prop] = value;
    } 
  }

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}