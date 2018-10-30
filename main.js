var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var listBooks = function() {
    for(var i = 0; i < books.length; i++) {
      console.log(books[i].getAttribute('name'));
    }
  };

  var checkOutBook = function(book) {
    for(var i = 0; i < books.length; i++) {
      if(books[i] === book) {
        books[i].setAttribute('checkedOut', true);
      }
    }
  };

  var returnBook = function(book) {
    for(var i = 0; i < books.length; i++) {
      if(books[i] === book) {
        books[i].setAttribute('checkedOut', false);
      }
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
    if(Object.keys(attributes).includes(attribute)) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if(Object.keys(attributes).includes(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};