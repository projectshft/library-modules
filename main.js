// write your code here to make the tests pass
let Library = () => {
    let books = [];

    let addBook = (bookToAdd) => {
        // takes book title as an argument and pushes that title to the books array
        books.push(bookToAdd);
    };

    let checkOutBook = (bookToCheckout) => {
        // takes a book object as an argument and changes its checkedOut attribute to true, but only if that 
        // book exists in the library , else console log an error 'this book is not available'
        if (books.includes(bookToCheckout)/* && bookToCheckout.checkedOut === false*/) {
            bookToCheckout.setAttribute('checkedOut', true);
        }
        else {
            console.log(`${bookToCheckout} book is not available`)  
        };
    
    };

    let returnBook = (bookToReturn) => {
        // takes a book object as an argument and changes its checkedOut attribute to false, but only if that
        // book exists in the library 
        if (/*attributes.checkedOut === true &&*/ books.includes(bookToReturn)) {
            bookToReturn.setAttribute('checkedOut', false);
        }
        else {
            console.log(`${bookToReturn} book is not available`) 
        };
    }
    return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
    }
};



let Book = (title, author) => {
    let attributes = {
        title: title,
        author: author,
        checkedOut: false
    };

    let getAttribute = (attributeKey) => {
        // returns the attribute value with the name from the interal attributes
        // if (attributes[attributeKey]) {
            return attributes[attributeKey];
        // }

    }

    let setAttribute = (attributeKey, attributeValue) => {
        console.log('inside setAttribute with attributeName', attributeKey, 'attributeValue', attributeValue)
        // check to see if the attributeKey exists on the attributes object
        if (attributes[attributeKey] != undefined) {
            // set the attribute value to the property given by attributeValue
                attributes[attributeKey] = attributeValue;
        }

    }
    return {
        setAttribute: setAttribute,
        getAttribute: getAttribute
    }
};