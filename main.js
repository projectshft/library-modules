var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", true);
    } else {
      console.log("We don't stock that book.");
    }
  };

  var returnBook = function(book) {
    if (books.includes(book)) {
      book.setAttribute("checkedOut", false);
    } else {
      console.log("We don't stock that book.");
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

  var setAttribute = function(attribute, attributeInfo) {
    if (attribute in attributes) {
      attributes[attribute] = attributeInfo;
    }
  };

  return {
    getAttribute,
    setAttribute,
  };
};
