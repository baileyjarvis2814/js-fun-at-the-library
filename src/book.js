function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviewsArray) {
  for (var i = 0; i < reviewsArray.length; i++) {
    if (reviewsArray[i] === review) {
      return;
    }
  }
  reviewsArray.push(review);
}

function calculatePageCount(title){
  return title.length * 20
}

function writeBook(title, mainCharacter, genre) {
  var pageCount = calculatePageCount(title)
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: pageCount,
    genre: genre
  }
}

function editBook(book) {
  book.pageCount = Math.round(book.pageCount * 0.75)

}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}