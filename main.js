var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
  }

  var listBooks = function() {
    for (var i = 0; i < books.length; i++) {
      console.log(books[i].getAttribute('title'))
    }
  }

  var checkOutBook = function(book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === book.getAttribute('title')) {
        book.setAttribute('checkedOut', true)
      }
    }
  }

  var returnBook = function(book) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === book.getAttribute('title')) {
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

//Book module
var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false,
  };

  var getAttribute = function(attribute) {
    var keys = Object.keys(attributes);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === attribute) {
        return attributes[attribute]
      }
    }

  }

  var setAttribute = function(attribute, value) {
    var keys = Object.keys(attributes);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === attribute) {
        return attributes[attribute] = value;
      }
    }
  }

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
};


var library = Library();
var hungerGames = Book('Hunger Games', 'Suzanne Collins');
var toot = Book('Toot', 'Leslie Patricelli');


library.addBook(hungerGames);
// library.addBook(toot);
// library.checkOutBook(toot);
// library.listBooks();
