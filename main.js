var Library = function() {

  var books = [];

  var addBook = function(newBook) {
    // newBook.setAttribute(title, newBook);
    // newBook.setAttribute(checkout, false);
    books.push(newBook);
  };

  var checkOutBook = function(outgoingBook) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === outgoingBook.getAttribute('title')) {
        if (books[i].getAttribute('checkedOut') === false) {
          books[i].setAttribute('checkedOut', true);
          console.log('"' + books[i].getAttribute('title') + '" is now checked out.');
        } else {
          console.log('I\'m sorry, but "' + books[i].getAttribute('title') + '" is already checked out.');
        }
      } else {
        ('I\'m sorry, but "' + books[i].getAttribute('title') + '" is not in the library.')
      }
    }
  }

  var returnBook = function(returningBook) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === returningBook.getAttribute('title')) {
        if (books[i].getAttribute('checkedOut') === true) {
          books[i].setAttribute('checkedOut', false);
          console.log('"' + books[i].getAttribute('title') + '" is now checked in.');
        } else {
          console.log('"' + books[i].getAttribute('title') + '" is already checked in. What\'s going on here?');
        }
      } else {
        ('I\'m sorry, but "' + books[i].getAttribute('title') + '" is not in the library.');
      }
    }
  }

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
    //here's the rub, I needed to make sure false was valid
    if (attribute in attributes) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if (attribute in attributes) {
          attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};

var library = Library();
var book1 = Book('Hunger Games');
var book2 = Book('Toot');

library.addBook(book1);
library.checkOutBook(book1);
library.returnBook(book1);
