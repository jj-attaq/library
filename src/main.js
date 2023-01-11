"use strict";
window.onload=function() {
  addModal()
  addBook()
}
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
}

Book.prototype.read = function() {
  return true ? 'has been read' : 'has not been read yet' 
}
Book.prototype.info = function() {
  return `"${this.title}" by ${this.author}, is ${this.pages} pages long, and ${this.read()}.`
}

const dune = new Book('Dune', 'Frank Herbert', 280, true);
const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 300, true);
myLibrary.push(dune, hobbit);

function displayLibrary(library) {
  return library.map(book => displayBook(book));
}
function addBook() {
  const form = document.querySelector('#form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const readStatus = document.getElementById('readStatus');
    const newBook = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, `${readStatus.value}`)
    const refreshForm = () => {
      title.value = '';
      author.value = '';
      pages.value = '';
      readStatus.value = '';
    }
    myLibrary.push(newBook);
    displayBook(newBook);
    refreshForm();
  })
}
function addModal() {
  const modal = document.querySelector('#modal');
  const openModal = document.querySelector('#openModal');
  openModal.addEventListener('click', () => {
    modal.showModal();
  })
  const closeModal = document.querySelector('#addBook');
  closeModal.addEventListener('click', () => {
    modal.close();
  })
}

function displayBook(book) {
  const booksContainer = document.querySelector('.books-container');

  const title = document.createElement('div')
  title.classList.add('book-title')

  const author = document.createElement('div')
  author.classList.add('book-author')

  const pages = document.createElement('div')
  pages.classList.add('book-pages')

  const read = document.createElement('div')
  read.classList.add('book-readStatus')

  const remove = document.createElement('div')
  remove.classList.add('book-removal')
  const removeButton = document.createElement('button')
  removeButton.classList.add('bookRemoval')
  removeButton.textContent = 'X';

  booksContainer.append(title, author, pages, read, remove);

  return title.append(book.title), author.append(book.author), pages.append(book.pages), read.append(book.read()), remove.append(removeButton);
}
