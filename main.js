// write your code here to make the tests pass
var Library = function() {
  var books = [];

  var addBook = function(book) {
    books.push(book);
    console.log(books);
  }

// 1st  way to search if book exist in array.
  var checkOutBook = function(book){
    if(books.indexOf(book) != -1) {
      book.set('checkedOut', true);
    }
  }

// 2nd  way to search if book exist in array.
  var returnBook = function(book){
    if(books.includes(book)) {
      book.set('checkedOut', false);
    }
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
}


var Book = function(title, author) {
  var attributes = {
      title: title,
      author: author,
      checkedOut: false
    };

// need a better way to deal with checkedOut
  var getAttribute = function (attribute) {
      if (attributes[attribute] || attribute == 'checkedOut') {
        return attributes[attribute];
      }
    };

  var setAttribute = function (attribute, value) {
      if (attributes[attribute] || attribute == 'checkedOut') {
        attributes[attribute] = value;
      }
    };

    return {
      get: getAttribute,
      set: setAttribute
    };
};
