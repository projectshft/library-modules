// write your code here to make the tests pass
var Library = function() {
    var books = [];

    var addBook = function(book) {
        books.push(book);
    }

    var checkOutBook = function(book) {
      for (var i = 0; i < books.length; i ++) {
        if (books[i].getAttribute('title') == book.getAttribute('title')) {
          if (book.getAttribute('checkedOut') == false) {
            book.setAttribute('checkedOut', true)
          } else {
              console.log('Booked already checked out')
          }
        } else (
          console.log("Book not in library!")
        )
      }
    }

    var returnBook = function(book) {
        for (var i = 0; i < books.length; i ++) {
          if (books[i].getAttribute('title') == book.getAttribute('title')) {
            if (book.getAttribute('checkedOut') == true) {
              book.setAttribute('checkedOut', false)
            }
          } else (
            console.log("Book not in library!")
          )
        }
      }

    return {
        addBook: addBook,
        checkOutBook: checkOutBook,
        returnBook: returnBook
    }
}

var Book = function(title, author, checkedOut) {

    var attributes = {
        title: title,
        author: author,
        checkedOut: false
    };

    var getAttribute = function(attribute) {
      if (attribute in attributes) {
        return attributes[attribute];
      } else {
          console.log("Book does not have this attribute!")
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


var library = Library()

var hungerGames = Book("Hunger Games", "Suzanna Collins");
library.addBook(hungerGames);