var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var checkOutBook = function(book) {
    if(books.includes(book)) {
      book.setAttribute("checkedOut", true);
    } else {
      console.log("Book cannot be checked out as it is already checked out");
    }
  };

  var returnBook = function(book) {
    if(books.includes(book)) {
      book.setAttribute("checkedOut", false);
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
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    return attributes[attribute];
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
