"use strict";
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  //this.read = true ? 'has been read' : 'has not been read yet'
  /*
  this.title.classList.add('book-title');
  this.author.classList.add('book-author');
  this.pages.classList.add('book-pages');
  */
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
/*
  const card = document.createElement('div');
  card.classList.add('card');
  booksContainer.append(card);
  */
  /*
  const row = document.createElement('div');
  row.classList.add('book-row')
  */
  const title = document.createElement('div')
  title.classList.add('book-title')
  const author = document.createElement('div')
  author.classList.add('book-author')
  const pages = document.createElement('div')
  pages.classList.add('book-pages')
  const read = document.createElement('div')
  read.classList.add('book-readStatus')
  booksContainer.append(title, author, pages, read);
  /*
  book.title.classList.add('book-title');
  book.author.classList.add('book-author');
  book.pages.classList.add('book-pages');
  book.read.classList.add('book-readStatus');
  */
  return title.append(book.title), author.append(book.author), pages.append(book.pages), read.append(book.read());
  //return card.append(book.info());
}
