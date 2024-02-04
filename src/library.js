function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
}

function addBook(library, book) {
  if (library.shelves[book.genre] !== undefined) {
    library.shelves[book.genre].push(book);
  }
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      var removedBook = shelf.splice(i, 1)[0];
      return `You have now checked out ${removedBook.title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  if (genre) {
    var count = library.shelves[genre].length;
    return `There are a total of ${count} ${genre} books at the ${library.name}.`;
  } else {
    var totalCount = Object.keys(library.shelves)
      .reduce(function(sum, shelfGenre) {
        return sum + library.shelves[shelfGenre].length;
      }, 0);
    return `There are a total of ${totalCount} books at the ${library.name}.`;
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};