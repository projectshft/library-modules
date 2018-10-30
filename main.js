// write your code here to make the tests pass
var Library = function() {
  var books = [];                       //private array of book objects

//adds a book object to the private array (created with the Book module)
  var addBook = function(bookObject) {
    books.push(bookObject);
  };

//only checks out if it exists and not already checked out
  var checkOutBook = function(book) {
    if (books.indexOf(book) > -1 && book.getAttribute("checkedOut") === false) {
      book.setAttribute("checkedOut", true);
      return;
    }
    console.log("That book doesn't exist in your library or is already checked out");
  };

//only returns if exists and already checked out
  var returnBook = function(book) {
    if (books.indexOf(book) > -1 && book.getAttribute("checkedOut") === true) {
      book.setAttribute("checkedOut", false);
    } else {
      console.log("That book doesn't exist in your library or is already returned");
    }
  };

//library returns with 3 total methods that allow for closure when invoked
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function(title, author) {
  var attributes = {      //private object of book attributes
    title: title,
    author: author || null,
    checkedOut: false
  };

  //get a book's specific single attribute if it exists
  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    } else {
      console.log("You didn't use getAttribute properly.");
    }
  };

//set a book's single attribute if it exists
  var setAttribute = function(attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    } else {
      console.log("You didn't use setAttribute properly.");
    }
  };

  //book returns with 2 methods that allow for closure when invoked
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};
