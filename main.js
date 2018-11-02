// write your code here to make the tests pass

//LIBRARY MODULE
var Library = function () {
  //private books array
  var books = [];
  //public function 1 -  addBook, to private books array
  var addBook = function (book) {
    books.push(book);
  };
  /* public function2 -  checkOutBook, takes book object as argument and changes its checkout attr to true */
  var checkOutBook = function (book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('checkedOut') === false) {
        books[i].setAttribute('checkedOut') === true;
      } else {
        console.log("Sorry, this book has already been checked out.");
      }
    }
  };
  //public function 3 -  returnBook, takes book object as arg and changes checkedOut attr to false
  var returnBook = function (book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('checkedOut') === true) {
        books[i].setAttribute('checkedOut') === false;
      } else {
        console.log("Ready for checkout.");
      }
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
};

//var library = Library();

//BOOK MODULE
var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };
  //public function 1- getAttribute, takes 1 arg (name of one of book's attributes) and return
  var getAttribute = function (attribute) {
    var keys = Object.keys(attributes);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === attribute) {
        return attributes[attribute]
      }
    }
  };
  // //public function 2 - setAttribute
  var setAttribute = function (attribute, value) {
    if (attributes[attribute]) {
      attributes[attribute] = value;
    }
  };
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
}

var library = Library();
var hungerGames = Book('Hunger Games', 'Suzanne Collins');
var harryPotter = Book('Harry Potter', 'J.K. Rowling');
library.addBook(hungerGames);
library.addBook(harryPotter);
library.checkOutBook(harryPotter);


console.log(hungerGames.getAttribute('title'));
