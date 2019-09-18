var Library = function() {
    var books = [];

    var addBook = function(book) {
      books.push(book);
    };

    var checkOutBook = function (book) {
      var search_book = findBook(book);

        if(search_book){
            if(!search_book.getAttribute('checkedOut')) {

            search_book.setAttribute('checkedOut', true);
            }

            console.log("Book is already checked out");
        }

        console.log("Book does not exist");
    }

    var returnBook = function (book) {
      var search_book = findBook(book);

        if(search_book){
            if(search_book.getAttribute('checkedOut')) {

            search_book.setAttribute('checkedOut', false);
            }

            console.log("Book is already checked in?");
        }

        console.log("Book does not exist");
      }

    //still not sure if this would actually find a matching books
    //if the book object passed in is a different object than the
    //original added book
    var findBook = function (book) {
        var search_title = book.getAttribute('title');
        var search_author = book.getAttribute('author');
        for(var i = 0; i < books.length; i++){
          if(books[i].getAttribute('title') == search_title
            && books[i].getAttribute('author') == search_author)
          {
            return books[i];
          }
        }
    }

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
      if (attributes.hasOwnProperty(attribute)){
        return attributes[attribute];
      }
    };

    var setAttribute = function(attribute, value) {
      if (attributes.hasOwnProperty(attribute)){
        attributes[attribute] = value;
      }
    };

    return {
      getAttribute: getAttribute,
      setAttribute: setAttribute
    };
  };
