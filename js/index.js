//document.addEventListener("DOMContentLoaded", function() {});

document.addEventListener("DOMContentLoaded", function() {
    // const controller = new DomController
    // controller.init()
    showAllBooks()
  
  });
  
  
  //************* Grab Elements off the DOM ***********/
  
  const listPanel = document.querySelector('#list-panel')
  const list = document.querySelector('#list')
  
  const showPanel = document.querySelector('#show-panel')
  
  //************* Event Listeners ********************/
  
  list.addEventListener('click', showBookInfo)
  
  //*********** Network Request (Fetch) **************/
  
  function showAllBooks(){
    fetch(`http://localhost:3000/books`)
      .then(res => res.json())
      .then(booksArray => createBooksLi(booksArray))
  }
  
  function showBookInfo(event){
    if (event.target.matches('li')){
      fetch(`http://localhost:3000/books/${event.target.dataset.id}`)
      .then(res => res.json())
      .then(book=> createBookTags(book))
    }
  }
  
  
  //****** Manipulating the Dom and Logic ***********/
  
  function createBooksLi(booksArray) {
    booksArray.forEach(book => {
      list.innerHTML += `
      <li data-id=${book.id}>${book.title}</li>
      `
    })
  }
  
  function createBookTags(book) {
    showPanel.innerHTML = ""
    showPanel.innerHTML = `
      <img src=${book.img_url}>
      <p>${book.description}</p>
      <br>
      <strong>${bookUsers(book)}</strong> 
    `
  }
  
  // function that iterates through book.users 
  
  const book = {
    
  }
  
  function bookUsers(book) {
  
  }