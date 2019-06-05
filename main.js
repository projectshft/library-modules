const Library = () => {
  const books = [];
  const isBookFound = (book) => books.findIndex(libraryBook => {
    return libraryBook.getAttribute('title') === book.getAttribute('title');
  }) > -1;
  const errorMessage = (book) => `Book '${book.getAttribute('title')}' does not exist in the library`;

  return {
    addBook(book) {
      books.push(book);
    },
    checkOutBook(book) {
      if (isBookFound(book)) {
        return book.setAttribute('checkedOut', true);
      }

      console.log(errorMessage(book));
    },
    returnBook(book) {
      if (isBookFound(book)) {
        return book.setAttribute('checkedOut', false);
      }

      console.log(errorMessage(book));
    },
  };
};

const Book = (title, author) => {
  const attributes = {
    title,
    author,
    checkedOut: false,
  };

  return {
    getAttribute(attribute) {
      if (attributes.hasOwnProperty(attribute)) {
        return attributes[attribute];
      }
    },
    setAttribute(attribute, value) {
      if (attributes.hasOwnProperty(attribute)) {
        attributes[attribute] = value;
      }
    },
  };
};
