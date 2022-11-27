"use strict";
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  //this.read = true ? 'has been read' : 'has not been read yet'
}

Book.prototype.read = function() {
  return true ? 'has been read' : 'has not been read yet' 
}
Book.prototype.info = function() {
  return `"${this.title}" by ${this.author}, is ${this.pages} pages long, and ${this.read()}.`
}

const dune = new Book('Dune', 'Frank Herbert', 300, true);

function displayLibrary(library) {
  return library.map(book => displayBook(book));
}

function displayBook(book) {
  const booksContainer = document.querySelector('.books-container');
  const card = document.createElement('div');
  card.classList.add('card');
  booksContainer.append(card);
  return card.append(book.info());
}
