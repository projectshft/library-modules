function Library () {
  var bookList = [];

  var addBook = function (book) {
      bookList.push(book);
  }

  var listBooks = function() {
    for (var i = 0; i < bookList.length; i++) {
      console.log(books[i].getAttribute('title'))
    }
  }
  var checkOutBook = function(book) {
    for (var i = 0; i < bookList.length; i++) {
      if (bookList[i].getAttribute('title') === book.getAttribute('title')) {
        book.setAttribute('checkedOut', true)
      }
    }

  }

  var returnBook = function(book) {
    for (var i = 0; i < bookList.length; i++) {
      if (bookList[i].getAttribute('title') === book.getAttribute('title')) {
        book.setAttribute('checkedOut', false)
      }
    }
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
    listBooks: listBooks
  };
};

var Book = function (title, author) {

  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function (attribute) {
    var keys = Object.keys(attributes);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === attribute) {
        return attributes[attribute];
      }
    }

  };
  var setAttribute = function (attribute, value){
    var keys = Object.keys(attributes);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === attribute) {
        return attributes[attribute] = value;
      }
    }
  };
    return {
      getAttribute: getAttribute,
      setAttribute: setAttribute
    }
  };



// function addBook (Book) {
//      bookList.push(Book);
//
// };
//
// function checkOutBook(Book){
//   if (checkedOut) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };
//
// function returnBook (Book) {
//   if (checkOutBook = false) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };
//
// var Book = (function (getAttribute) {
//
//   function (setAttribute) {
//
//  };
// });
//
//
//
// addBook('Critique of Pure Reason');
//
// console.log(bookList);
