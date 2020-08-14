const Library = function() {
  let books = [];
  let addBook = function(bookToAdd) {
    books.push(bookToAdd)
  }

  let checkOutBook = function(bookCheckOut) {
    let foundBook = books.some((book) => {
      return book.getAttribute('title') == bookCheckOut.getAttribute('title')
    })

    if(foundBook) {
      bookCheckOut.setAttribute('checkedOut', true)
    };
  }

  let returnBook = function(bookToReturn) {
    let foundBook = books.some((book) => {
      return book.getAttribute('title') == bookToReturn.getAttribute('title')
    })
    if(foundBook) {
      bookToReturn.setAttribute('checkedOut', false)
    };
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  }
}

const Book = function(bookTitle, author) {
  let attributes = {
  checkedOut: false,
  title: bookTitle,
  author: author
  }

  let getAttribute = function(attributeName) {
    return attributes[attributeName];
  }

  let setAttribute = function(attributeName, value){
    //console.log(attributeName, value)
    if (attributes[attributeName] != undefined) {
      attributes[attributeName] = value;
    }
  }
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}
