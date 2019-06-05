// write your code here to make the tests pass

var Library = function() {

    var books = [];

    var addBook = function(book) {

        books.push(book);

    } //end addBook

    var checkOutBook = function(book) {

        if (books.includes(book))
            book.setAttribute('checkedOut', true);

        else
            console.log('Book does not exist in the library');

    } //end checkOutBook

    var returnBook = function(book) {

        if (books.includes(book))
            book.setAttribute('checkedOut', false);

        else
            console.log('Book does not exist in the library');

    } //end returnBook

    return {

        books: books,
        addBook: addBook,
        checkOutBook: checkOutBook,
        returnBook: returnBook

    };

} //end Library

var Book = function(title, author) {

    let attributes = {
        checkedOut: false,
        title: title,
        author: author
    }

    var getAttribute = function(attribute) {

        return attributes[attribute];

    } //getBookAttribute

    var setAttribute = function(attribute,data) {

        if (attributes.hasOwnProperty(attribute))
            attributes[attribute] = data;

    } //end setBookAttribute

    return {
        
        getAttribute,
        setAttribute

    };

} //end Book