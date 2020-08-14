let Library = function () {
  let books = [];

  let addBook = function (bookToAdd) {
    books.push(bookToAdd);
    // bookToAdd.setAttribute("checkedOut", false);
    // console.log("adding", book.getAttribute("title"));
  };

  let checkOutBook = function (bookToCheckOut) {
    // console.log(`Checkingout! ${bookToCheckOut.getAttribute('title')}`);
    if (
      books.find(function (book) {
        // console.log(book.getAttribute('title'), bookToCheckOut.getAttribute('title'));
        return (
          book.getAttribute("title") === bookToCheckOut.getAttribute("title")
        );
      })
    ) {
      console.log("passed & book can be checked out!");
      bookToCheckOut.setAttribute("checkedOut", true);
      // console.log(`checkingOut ${bookToCheckOut} & checkedOut is ${book.getAttribute('checkedOut')}`)
    } else {
      console.log("This book is not available to loan.");
    }
  };

  let returnBook = function (bookToReturn) {
    console.log(`return: ${bookToReturn.getAttribute("title")}`);
    if (
      books.find(function (book) {
        // console.log(book.getAttribute('title'), bookToCheckOut.getAttribute('title'));
        return (
          book.getAttribute("title") === bookToReturn.getAttribute("title")
        );
      })
    ) {
      console.log("passed & book can be returned!");
      bookToReturn.setAttribute("checkedOut", false);
    } else {
      console.log("This is not one of our library's books.");
    }
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
  };
};

let Book = function (titleNew, authorNew) {
  let attributes = {
    title: titleNew,
    author: authorNew,
    checkedOut: false,
  };

  let getAttribute = function (attributeOfInterest) {
    return attributes[attributeOfInterest];
  };

  let setAttribute = function (attributeOfInterest, value) {
    if (attributes[attributeOfInterest] != undefined) {
      attributes[attributeOfInterest] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};
