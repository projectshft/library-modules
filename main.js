var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  }
  var checkOutBook = function () {
    if(attributes[checkedOut] == false) {
      attributes[checkedOut] = true);
    }
  }
  return {
    addBook: addBook,
  }
};
var Book = function (name, author) {
  var attributes = {
    name: name,
    author: author,
   checkedOut: false
  };

  var getAttribute = function (attribute) {
    if (attributes[attribute]) {
      return attributes[attribute];
    }
  };
  var setAttribute = function (attribute, value) {
    if (attributes[attribute]) {
     attributes[attribute] = value;
   }
};
  return {
    get: getAttribute,
    set: setAttribute,
    checkedOut: checkedOut
  };
};
}
