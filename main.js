var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var listBooks = function() {
    books.forEach(book => {
      console.log(book.getAttribute('name'));
    });
  };

  var checkOutBook = function(book) {
    if(books.indexOf(book) > -1) {
      book.setAttribute('checkedOut', true);
    }
  };

  var returnBook = function(book) {
    if(books.indexOf(book) > -1) {
      book.setAttribute('checkedOut', false);
    }
  }

  return {
    addBook: addBook,
    listBooks: listBooks,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    if(attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if(attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};