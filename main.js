
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var returnBook = function(book) {
    if (books.includes(book)) {
      book.set("checkedOut", false);
   }
  };
  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.set("checkedOut", true);
    }
};
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function(name, author) {
  var attributes = {
    title: name,
    author: author,
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    if (attributes[attribute] || attribute == "checkedOut") {
      return attributes[attribute];
    }
  };
  var setAttribute = function(attribute, value) {
    if (attributes[attribute] || attribute == "checkedOut") {
      attributes[attribute] = value;
    }
  };
  return {
    get: getAttribute,
    set: setAttribute
  };
};
