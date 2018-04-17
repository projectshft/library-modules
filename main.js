// write your code here to make the tests pass
var Library = function(){
  var books =[];
  return {
    addBook: function(book){
      books.push(book);

    },
    checkOutBook: function(book){
      if(books.indexOf(book)!=-1){
        if(!book.get("checkedOut")){
          book.set("checkedOut", true);
        }
      }
    },
    returnBook: function(book){
      if(books.indexOf(book)!=-1){
        book.set("checkedOut", false);
      }
    }
  }
}
var Book = function(tit, aut){
  var title=tit;
  var author=aut;
  var checkedOut=false;
  return {
    get: function(prop){
      switch(prop){
        case "checkedOut":
          return checkedOut;
          break;
        case "title":
          return title;
          break;
        case "author":
          return author;
          break;
      }

    },
    set: function(prop, value){
      switch(prop){
        case "checkedOut":
          checkedOut=value;
          break;
        case "title":
          title=value;
          break;
        case "author":
          author=value;
          break;
      }
    }
  }
}
