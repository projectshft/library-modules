// write your code here to make the tests pass
//
/* A Library module which should have 3 public functions:
 -- addBook which simply adds new books to the library's private books array. 
 -- checkOutBook which takes a book object as an argument and changes its checkedOut attribute to true, 
  but ONLY if that book exists in the library. Otherwise, just console log some kind of error. 
  -- returnBook which takes a book object as an argument and changes its checkedOut attribute to false, 
    but ONLY if that book exists in the library. Otherwise, just console log some kind of error.

A Book module which should have 2 public functions:
 -- getAttribute, which should take one argument, the name of one of the book's attributes, 
  and return it, but only if that attribute is a key on the Book module's attributes object. 
  -- setAttribute, which should take two arguments, the name of one of the book's attributes 
    and set it on the book's attributes object, but only if that attribute is a key 
    on the Book module's attributes object. 
*/

var Library = function() {
  var books = [];  // make an array of objects for books in library

  var addBook = function(book) {
    console.log('addBook() called');
    console.log(typeof(book));
    console.log(book);
    console.log(book.getAttribute('title'));
    console.log(book.getAttribute('checkedOut'));
    books.push(book);
    console.log('addBook books after ');
    console.log(books);
  };

  var checkOutBook = function(book) {  
    console.log('checkOutBook() called');
    console.log('books.includes(book) value ' + books.includes(book));
    if (books.includes(book)) {
      // and if Book attributes checkedOut === true
      console.log('found ' + book);
      let indexOfBook = books.indexOf(book);
      
      console.log(books[indexOfBook].getAttribute('checkedOut'));
      if (books[indexOfBook].getAttribute('checkedOut') === false) {
        console.log('-->made it to the changing of checkedOut');
        books[indexOfBook].setAttribute('checkedOut', true);
      } else {
        console.log(book + ' is already checked out.');
      }
      console.log(book + ' is not in the library.'); 
    }
  }
    
  var returnBook = function(book) { 
    console.log('returnBook() called');
    if (!books.includes(book)) {
       console.log('book does not belong to this library');
       return;
      }
    console.log(book + ' belongs to library.');
    if (book.getAttribute('checkedOut') === false) {
      console.log('...but we already have this book.');
      } else {
      book.setAttribute('checkedOut', false);
      console.log(book + 'has been returned. Thank you.');
    }
  };

  
  
  var listBooks = function() {  // this is not in specs, but hoped to use for testing. It doesn't work.
    for (var i = 0; i < books.length; i += 1) {
      console.log('title: ' + books[i](getAttribute('title')));
      console.log('checked out? ' + books[i](getAttribute('checkedOut')));
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
    listBooks: listBooks  // not in spec, fails anyway. Why?
  };
};

var Book = function(title) {
  var attributes = {
    title: title,
    checkedOut: false
  };

  var getAttribute = function(lookFor) {
    console.log('getAttribute() called');
    console.log('that attribute is' + lookFor);
    console.log('and its value is ' + attributes[lookFor]);
    if (lookFor in attributes) {  
      console.log('it associated ' + attributes[lookFor]);
      return attributes[lookFor];
    }
  };

  var setAttribute = function(attr, setting) {
    console.log('setAttribute() called');
    if (attr in attributes) {
      attributes[attr] = setting;
      console.log('result of setAttribute: ' +     attributes[attr]);
    } else {   // I think this can be skipped... 
      return;}  // ...along with this
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};

