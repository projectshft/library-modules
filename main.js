// write your code here to make the tests pass

const Library = () => {
  let library = [];

  const addBook = (book) => {
    library.push(book);
  };

  const checkOutBook = (book) => {
    if (library.includes(book)) book.checkedOut = true;
    else console.log('book is not in the library');
  };

  const returnBook = (book) => {
    if (library.includes(book)) book.checkedOut = false;
    else console.log('book is not in the library');
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

const Book = (title, author) => {
  return {
    title: title,
    author: author,
    checkedOut: false,
    getAttribute: function(attribute) {
      if (Object.keys(this).includes(attribute)) return this[attribute];
    },
    setAttribute: function(attribute, value) {
      if (Object.keys(this).includes(attribute)) this[attribute] = value;
    }
  };
};
