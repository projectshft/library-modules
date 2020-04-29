// write your code here to make the tests pass

// Library Module
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
    book.setAttribute('checkedOut', false);
  };

  var returnBook = function(book) {
    if (!books.includes(book)) {
      return console.log('book is not in the Library');
    }

    if (book.getAttribute('checkedOut') === true) {
      return book.setAttribute('checkedOut', false)
    }
  };

  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
    }
  };

  return {
    addBook: addBook,
    returnBook: returnBook,
    checkOutBook: checkOutBook
  }

};


//Book Module
var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  }

  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};
