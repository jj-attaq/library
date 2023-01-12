"use strict";
window.onload=function() {
  addModal()
  addBook()
}
const myLibrary = [];

function Book(title, author, pages, checkedOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.checkedOrNot = checkedOrNot;
  this.listPlacement = myLibrary.length;
}
Book.prototype.read = function(readStatus) {
  readStatus = this.checkedOrNot;
  return readStatus === true ? 'has been read' : 'has not been read yet';
}
Book.prototype.reference = function() {
  return myLibrary.indexOf(this);
}
Book.prototype.info = function() {
  return `"${this.title}" by ${this.author}, is ${this.pages} pages long, and ${this.read()}.`
}

const dune = new Book('Dune', 'Frank Herbert', 280, false);
//const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 300, true);
//myLibrary.push(dune, hobbit);

function displayLibrary(library) {
  return library.map(book => displayBook(book));
}
function addBook() {
  const form = document.querySelector('#form');
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const readStatus = document.getElementById('readStatus');
  let checkedOrNot = readStatus.checked;
  readStatus.addEventListener('change', () => {
    if(readStatus.checked) {
      checkedOrNot = true;
    } else {
      checkedOrNot = false;
    }
  })
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newBook = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, checkedOrNot);
    const refreshForm = () => {
      title.value = '';
      author.value = '';
      pages.value = '';
      //readStatus.value = '';
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
function removeBook() {
  const bookRef = document.querySelector('#remove-book')
  console.log(bookRef);

  bookRef.addEventListener('click', () => {
    const title = document.querySelector('.book-title');
    return title.remove(), author.remove(), pages.remove(), read.remove(), remove.remove();
  })
}
removeBook();
function displayBook(book) {
  const booksContainer = document.querySelector('.books-container');
  const para = document.createElement('p');

  const title = document.createElement('div');
  title.classList.add('book-title');

  const author = document.createElement('div');
  author.classList.add('book-author');

  const pages = document.createElement('div');
  pages.classList.add('book-pages');

  const read = document.createElement('div');
  read.classList.add('book-readStatus');

  const readBox = document.createElement('input');
  let checkedOrNot = book.checkedOrNot;
  readBox.classList.add('readBox');
  readBox.setAttribute('id', `readBox-book-${book.listPlacement}`);
  readBox.type = 'checkbox';
  
  readBox.addEventListener('change', () => {
    if(readBox.checked) {
      book.checkedOrNot = true;
      read.textContent = book.read();
      read.append(readBox);
    } else {
      book.checkedOrNot = false;
      read.textContent = book.read();
      read.append(readBox);
    }
  })
  
  const remove = document.createElement('div');
  remove.classList.add('book-removal');
  const removeButton = document.createElement('button');
  removeButton.classList.add('bookRemoval');
  removeButton.setAttribute('id', `remove-book`);
  removeButton.textContent = 'X';

  booksContainer.append(title, author, pages, read, remove);

  return  title.append(book.title), author.append(book.author), pages.append(book.pages), read.append(book.read(), readBox), remove.append(removeButton);
}
