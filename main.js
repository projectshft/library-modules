
var Library = function() {
  var books = [];
  var addBook = function(book) {
    books.push(book);
  };
  var checkOutBook = function(book) {
    if (books.includes(book) && book.getAttribute('checkedOut') === false) {
      book.setAttribute('checkedOut', true);
    } else {
      console.log('cannot check out book not in library');
    }
  };
  var returnBook = function(book) {
    if (books.includes(book) && book.getAttribute('checkedOut') === true) {
      book.setAttribute('checkedOut', false);
    } else {
      console.log('cannot return book not in library');
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
