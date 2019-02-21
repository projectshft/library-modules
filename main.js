/** A Library module */
var Library = function () {
  var books = [];

  // adds a book to the private books array
  var addBook = function (newBook) {
    books.push(newBook);
    newBook.setAttribute('checkedOut', true);
  }

  var checkOutBook = function (checkoutBook) {
    // find if book exists in library
    if (books.includes(checkoutBook)) {
      checkoutBook.setAttribute('checkedOut', true);
    }

  }

  var returnBook = function (checkoutBook) {
    // ...
    if (books.includes(checkoutBook)) {
      checkoutBook.setAttribute('checkedOut', false);
    }
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }

}

/** A book module */
var Book = function (title, author, checkedOut) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: checkedOut || "hi",
  }

  var getAttribute = function (attributeName) {
    // only return attribute if it exists
    if (attributeName === 'checkedOut' || attributes[attributeName]) {
      return attributes[attributeName];
    }
  }

  var setAttribute = function (attributeName, value) {
    if (attributeName === 'checkedOut' || attributes[attributeName]) {
      attributes[attributeName] = value;
    }
  }

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}
