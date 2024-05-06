// script.js

const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      coverUrl: 'https://example.com/book1-cover.jpg' 
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      coverUrl: 'https://example.com/book2-cover.jpg'
    },
    {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        alreadyRead: false,
        coverUrl: 'https://example.com/book3-cover.jpg'
      },
      {
        title: 'Hooked: How to Build Habit-Forming Products',
        author: 'Nir Eyal',
        alreadyRead: true,
        coverUrl: 'https://example.com/book4-cover.jpg'
      }
  ];
  
  function generateBookList(books) {
      let list = document.createElement('ul');
  
      books.forEach(function(book) {
          let listItem = document.createElement('li');
  

          let coverImage = document.createElement('img');
          coverImage.src = book.coverUrl; 
          coverImage.alt = `${book.title} Cover`; 
          coverImage.classList.add('book-cover'); 
          listItem.appendChild(coverImage); 
  

          let bookDetails = document.createElement('span');
          bookDetails.textContent = `${book.title} by ${book.author}`;
          listItem.appendChild(bookDetails); 
  
          if (book.alreadyRead) {
              listItem.classList.add('already-read');
          }
          list.appendChild(listItem);
      });
  
      return list;
  }
  
  let bookListContainer = document.getElementById('bookListContainer');
  bookListContainer.appendChild(generateBookList(books));
  