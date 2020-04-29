var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", true);
    }
  };

  var returnBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", false);
    }
  };

  return {
    addBook,
    checkOutBook,
    returnBook,
  };
};

var Book = function(title, author) {
  var attributes = {
    title,
    author,
    checkedOut: false,
  };

  var getAttribute = function(attribute) {
    return attributes[attribute];
  };

  var setAttribute = function(attribute, status) {
    if (attribute in attributes) {
      attributes[attribute] = status;
    }
  };

  return {
    getAttribute,
    setAttribute,
  };
};
