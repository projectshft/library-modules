var Library = function() {

  var books = [];

  var addBook = function(newBook) {
    books.push(newBook);
  };

  // isInLibrary utilized in checkedOutBook and returnBook
  var isInLibrary = function(title) {
    var bookCheck = books.some(function(book) {
      return book.getAttribute('title') === title;
    });

    if (bookCheck) {
      return true;
    } else {
      console.log('I\'m sorry, but "' + title + '" is not in the library.');
      return false;
    }
  };

  var checkOutBook = function(outgoingBook) {
    for (var i = 0; i < books.length; i++) {
      // Creating bookInLibrary for readability - thanks Sean!
      var book = books[i];
      if (isInLibrary(outgoingBook.getAttribute('title'))) {
        if (book.getAttribute('checkedOut') === false) {
          book.setAttribute('checkedOut', true);
          console.log('"' + book.getAttribute('title') + '" is now checked out.');
        } else {
          console.log('I\'m sorry, but "' + book.getAttribute('title') + '" is already checked out.');
        }
      }
    }
  };


  var returnBook = function(returningBook) {
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      if (isInLibrary(returningBook.getAttribute('title'))) {
        if (book.getAttribute('checkedOut') === true) {
          book.setAttribute('checkedOut', false);
          console.log('"' + book.getAttribute('title') + '" is now checked in.');
        } else {
          console.log('"' + book.getAttribute('title') + '" is already checked in. What\'s going on here?');
        }
      }
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };

};

var Book = function(title) {
  var attributes = {
    title: title,
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    //Refactor from (attribute in attributes) - ES5 compatible
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
