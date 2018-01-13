
var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  }

  var checkOutBook = function (book) {
    if (books.indexOf(book) > -1) {
      book.set("checkedOut", true);
    } else {
      console.log("Book not found.");
    }
  }

  var returnBook = function (book) {
    if (books.indexOf(book) > -1) {
      book.set("checkedOut", false);
    }
    console.log("That's not our book.");
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  var getAttribute = function (attribute) {
    if (attributes[attribute]) {
      return attributes[attribute];
    } else if(attribute == "checkedOut") {
      return attributes[attribute];
    }
  };

  var setAttribute = function (attribute, value) {
    if (attributes[attribute]) {
      attributes[attribute] = value;
    } else if (attribute == "checkedOut" && attributes[attribute] == false) {
      attributes[attribute] = value;
    }
  };

  return {
    get: getAttribute,
    set: setAttribute
  };
};
