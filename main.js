// A Library module with 3 public functions: 1) addBook which adds new books to the library's private books array. 2) checkOutBook which takes a book object as an argument and changes it's checkedOut attribute to true, but only if that book exists in the library. 3) returnBook which takes a book object as an argument and changes it's checkedOut attribute to false, but only if that book exists in the library. 

//create a Library module 
var Library = function() {
  //create an empty array in which to hold all books in the library
  var libraryBooks = [];
  var bookErrorMessage = "That book isn't in this library.";

  //add a function to list all the books in the library???

  //a function that adds new books to the library's private books array
  var addBook = function(newBook) {
    //set "checkedOut" status to false when adding new book to library
    newBook.setAttribute('checkedOut', false); 
    libraryBooks.push(newBook);
  };

  //a function that takes a book object as an argument and changes its checkedOut attribute to true, but ONLY if that book exists in the library. 
  var checkOutBook = function(book) {
    //check whether the book exists in the library; if so change its checkedOut status to true. 
    var checkout = libraryBooks.find(function(book) {
      book.setAttribute('checkedOut', true);
    });
    //if the book doesn't exist in the library, console an error.
    if (checkout === undefined) {
      console.log(bookErrorMessage);
    }; 
  };
 
  //a function that takes a book object as an argument and changes its checkedOut attribute to false, but ONLY if that book exists in the library. 
  var returnBook = function(book) {
    //check whether the book exists in the library; if so change its checkedOut status to false.
    var returned = libraryBooks.find(function(book) {
      book.setAttribute('checkedOut', false);
    });
    //if the book doesn't exist in the library, console an error.
    if (returned === undefined) {
      console.log(bookErrorMessage);
    }; 
  };

  //return the functions so that they will be methods available when Library is invoked
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

//A Book module with 2 public functions: 1) getAttribute, which takes one argument, the name of one of the book's attributes, and returns it -- but only if that attribute is a key on the Book module's attributes object. 2) setAttribute takes one argument, the name of one of the book's attributes, and sets it on the book's attributes object -- but only if that attribute is a key on the Book module's attributes object.

var Book = function(title, author, checkedOut) {
  //create the book attributes object
  var attributes = {
    title: title,
    author: author, //|| null,??? 
  //pages: pages,???
    checkedOut: checkedOut || false
  };

  //var attributeErrorMessage = "That attribute doesn't exist for this book.";

  // getAttribute takes one argument, the name of one of the book's attributes, and returns it -- but only if that attribute is a key on the Book module's attributes object
  var getAttribute = function(attribute) {
    //ensure that the attribute is a key in the attributes object
    if (attributes.hasOwnProperty(attribute)) { 
      //return the value of the attribute
      return attributes[attribute];
    };
    //else return attributeErrorMessage;
  };
             
  var setAttribute = function(attribute, value) {
    //ensure that the attribute is a key in the attributes object
    if (attributes.hasOwnProperty(attribute)) {
      //set the attribute to the value
      attributes[attribute] = value;
    };
   // else return attributeErrorMessage; 
  };

  //return the two functions so they can be methods invoked on books (ouside of the module)
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};
