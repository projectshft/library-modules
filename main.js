// write your code here to make the tests pass
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  };

  var checkOutBook = function(book) {
    if (books.includes(book) && book.get("checkedOut") === false) {
      book.set("checkedOut", true);
    }
  };

  var returnBook = function(book) {
    if (books.includes(book)) {
      book.set("checkedOut", false);
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
    name: name,
    author: author,
    checkedOut: false
  };

  var getAttribute = function(attr) {
    if (attributes[attr] || attr == "checkedOut") {
      return attributes[attr];
    }
  };

  var setAttribute = function(attr, value) {
    if (attributes[attr] || attr == "checkedOut") {
      attributes[attr] = value;
    }
  };

  return {
    get: getAttribute,
    set: setAttribute
  };
};
//
// var myLibrary = new Library();
// var myBook = new Book("myBook", "Bob");
// var myBook2 = new Book("myBook2", "Bob2");
// myLibrary.addBook(myBook);
// myLibrary.addBook(myBook2);
// myLibrary.checkOutBook(myBook);
// myLibrary.returnBook(myBook);
// console.log(myBook.get("name"));
// console.log(myBook.get("author"));
// console.log(myBook.get("checkedOut"));
