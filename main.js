var Library = function () {
    var books = [];

     var addBook = function (book) {
        books.push(book);
    };

    var checkOutBook = function (book) {
      if(books.indexOf(book)!= -1){
          book.set("checkedOut", true);
          }

    };

    var returnBook = function(book) {
      if(books.indexOf(book)!= -1) {
        book.set("checkedOut", false);
        }
      };

    return {
      addBook: addBook,
      checkOutBook : checkOutBook,
      returnBook: returnBook
    };
};

var Book = function (theTitle, theAuth) {
  var detail = {
  title: theTitle,
  author: theAuth,
  checkedOut: false
  };

    var set = function(key, value){
      if (detail.hasOwnProperty(key)) {
      detail[key] = value;
    }};

    var get = function(item){
      if (detail.hasOwnProperty(key)) {
      return detail[key];
    }};

    return {
      set: set,
      get: get
    };

};
