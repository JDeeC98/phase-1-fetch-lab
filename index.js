function fetchBooks() {
  
  //sends a fetch request to the URL
 return fetch('https://anapioficeandfire.com/api/books')
  
  //turns the fetch data into json
  .then(response => response.json())
  
  //pushes the data to renderBooks
  .then(data => {
    renderBooks(data)
  })
}






document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
