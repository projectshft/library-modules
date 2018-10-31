// write your code here to make the tests pass

var Library = function () {
  var books = [];
  var addBook = function(someBookObj) {
    books.push(someBookObj);
  };
  var checkOutBook = function(bookObj) {
    for (var i = 0; i < books.length; i++){
      if (books[i] === bookObj) {
        bookObj.setAttribute("checkedOut", true);
      }
    }
  };
  var returnBook = function(bookObj){
    for (var i = 0; i < books.length; i++){
      if (books[i] === bookObj) {
        bookObj.setAttribute("checkedOut", false);
      }
    }
  };
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
    books: books
  }
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };
  var getAttribute = function(bookAttributeName){
    if (attributes.hasOwnProperty(bookAttributeName)) {
      return attributes[bookAttributeName];
    }
  };
  var setAttribute = function(bookAttributeName, value){
    if (attributes.hasOwnProperty(bookAttributeName)) {
      attributes[bookAttributeName] = value;
    }
  };
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    attributes: attributes
  }
};
