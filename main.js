/*
  This is a factory function that returns a library object with 3 methods:
  library.addBook(bookObj)  - adds a book to the books array
  library.checkoutBook(bookObj)  - checks out a book
  library.returnBook(bookObj)   - checks in a book  
 */
var Library = function() {
  var books = [];

  //this adds a book object to the books array
  var addBook = function(book) {
    books.push(book);
  }

  //this function will check-out a book if it exists in the books array and is checked in 
  var checkOutBook = function(book) {

    //this will check if the book is in the books array 
    let exists = false;
    for (let i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === book.getAttribute('title')) {
        exists = true;
      }
    }

    //if the book is checked-in and exists in the library, the book will be checked out 
    if (book.getAttribute('checkedOut') === false && exists) {
      book.setAttribute('checkedOut', true);
    } else {
      console.log('This book is not available at this library');
    }
  };

  //this function will check-in a book if it exists in the books array and is checked out 
  var returnBook = function(book) {

    //this will check if the book is in the books array 
    let exists = false;
    for (let i = 0; i < books.length; i++) {
      if (books[i].getAttribute('title') === book.getAttribute('title')) {
        exists = true;
      }
    }

    //if the book is checked out and exists in the library, the book will be checked in 
    if (book.getAttribute('checkedOut') && exists) {
      book.setAttribute('checkedOut', false);
    } else {
      console.log('This book is not available at this library');
    }
  };

  //this returns the library object with 3 methods for handling books, using closure to manipulate the books array in ONLY 3 ways and not directly
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
}

/*
This is a factory function that returns a book object with 2 methods:
book.getAttribute('title')   - returns the title
book.setAttribute('checkedOut', true)  - changes checkout status
*/
var Book = function(title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  //if the attribute exists on the book, this will return the value
  var getAttribute = function(attribute) {
    if (attributes[attribute] !== undefined) {
      return attributes[attribute];
    }
  };

  //if the attribute exists on the book, this will reset the value
  var setAttribute = function(attribute, value) {
    if (attributes[attribute] !== undefined) {
      attributes[attribute] = value;
    }
  }

  //this returns the book object with only 2 methods. we can only access and change properties that ALREADY exist on the book 
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};