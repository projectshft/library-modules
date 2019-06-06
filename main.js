  // write your code here to make the tests pass
  debugger;

  var Library = function() {
    var books = [];

    var addBook = function(book) {
      books.push(book);
    };

    var checkOutBook = function(book) {
      if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
      }
    }

    var listBooks = function() {
      for (var i = 0; i < books.length; i++) {
      console.log(books[i]);
      }
    }

    var returnBook = function(book) {
      if (books.includes(book)) {
        book.setAttribute('checkedOut', false);
      }
    }

    return {
      addBook: addBook,
      checkOutBook : checkOutBook,
      listBooks : listBooks,
      returnBook : returnBook
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
      else if (attributes["checkedOut"] == false  && attribute == 'checkedOut') {
        return attributes[attribute];
      }
    };

    var setAttribute = function(attribute, value) {
      if (attributes[attribute]) {
        attributes[attribute] = value;
      }
      else if (attributes["checkedOut"] == false  && attribute == 'checkedOut') {
        attributes[attribute] = value;
      }
    };

    return {
      getAttribute : getAttribute,
      setAttribute : setAttribute
    };
  };

  var superBook = Book('big book', 'mr twister');
  superBook.getAttribute('checkedOut');
