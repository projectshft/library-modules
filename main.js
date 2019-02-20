var Library = function() {
  var library = [];
  
  var addBook = function(book) {
    library.push(book);
  };

  var checkOutBook = function(book) {
    if(library.indexOf(book) !== -1) {
      book.setAttribute('checkedOut', true);
    }
  };

  var returnBook = function(book) {
    if(library.indexOf(book) !== -1) {
      book.setAttribute('checkedOut', false);
    }
  };
  
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

var Book = function(title, author) {
  
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };

  var setAttribute = function(attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    attributes: attributes,
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };  
};
