// write your code here to make the tests pass
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var checkOutBook = function(book) {
    book.setAttribute('checkedOut', true);
  }

  return {
    addBook: addBook,
    checkOutBook : checkOutBook
  }
};

var Book = function(title, author) {
  var attributes = {
    title : title,
    author : author,
    checkedOut : false
  };

  var getAttribute = function(attribute) {
    if (attributes[attribute]) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if (attributes[attribute]) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute : getAttribute,
    setAttribute : setAttribute
  };
};
