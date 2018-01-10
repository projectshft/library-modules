// write your code here to make the tests pass
var Library = function () {
  var catalog = [];
  var addBook = function (book) {
    catalog.push(book);
  };

  var checkOutBook = function (book) {
    if (catalog.includes(book)) {
      book.set('checkedOut', true);
    } else {
      console.log('Book not found.');
    }
  };

  var returnBook = function (book) {
    if (catalog.includes(book)) {
      book.set('checkedOut', false);
    } else {
      console.log('Book not found.');
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };

};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  }

  var getAttribute = function (attr) {
    // Why doesn't attributes[attr] work for this 'if'...
    if (attributes.hasOwnProperty(attr)) {
      return attributes[attr];
    } else {
      return undefined;
    }
  };

  var setAttribute = function (attr, value) {
    // ...or this one?
    if (attributes.hasOwnProperty(attr)) {
      attributes[attr] = value;
    }
  };

  return {
    get: getAttribute,
    set: setAttribute
  };
};
