// Book Constructor
function Book(title, author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Construtor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML= `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

//show alert
UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value="";
    document.getElementById('author').value="";
    document.getElementById('isbn').value="";
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){

    //Get form values

    const title= document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value 
    
    //instantiate book      
    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert('Please filll in all fields', 'error')
    } else {
        ui.addBookToList(book);

        ui.showAlert('Book Added', 'success');

        ui.clearFields();
        
    }




    e.preventDefault();
});