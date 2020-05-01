var Library = function() {
  var books = [];

  var addBook = function(book) {
    book['libraryBook'] = true;
    books.push(book);
  };

  var checkOutBook = function(book) {
    if (book.hasOwnProperty('libraryBook')) {
      book.setAttribute('checkedOut', true);
    }
  };

  var returnBook = function(book) {
    if (book.hasOwnProperty('libraryBook')) {
      book.setAttribute('checkedOut', false);
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false,
  };

  var getAttribute = function(attribute) {
    return attributes[attribute];
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
