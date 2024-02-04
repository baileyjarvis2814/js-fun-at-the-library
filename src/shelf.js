function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

function unshelfBook (bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1)
      break;
    }
  }
}

function listTitles (shelf) {
  var titlesArray = []
  for (var i = 0; i < shelf.length; i++) {
      titlesArray.push(shelf[i].title)
   }
  return titlesArray.join(', ')
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};