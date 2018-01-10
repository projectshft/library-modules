var Library = function() {
  books =[];

  var addBook = function(book) {
    books.push(book);
  }

  var checkOutBook = function(book) {
    if (books.includes(book)) {
      book.set("checkedOut", true);
    }
    else console.log("Error: book does not exist in library");
  }

  var returnBook = function(book) {
    if (books.includes(book)) {
      book.set("checkedOut", false);
    }
    else console.log("Error: book does not exist in library");
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
  }
}

var Book = function(title, author) {
  book = {
    title: title,
    author: author,
    checkedOut: false
  }

  var getAttribute = function(attribute) {
    if (attribute in book) {
      return book[attribute]
    }
    else console.log("Error this book does not have that attribute")
  }

  var setAttribute = function(attribute, value) {
    if (attribute in book) {
      book[attribute] = value
    }
    else console.log("Error this book does not have that attribute")
  }

  return {
    get: getAttribute,
    set: setAttribute
  }
}
