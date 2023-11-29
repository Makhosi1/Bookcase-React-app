
import React, { useState } from "react";
import Book from "./components/book/book";
import data from "./models/books.json";
import { BookList } from "./components/book_list/BookList";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddBookForm from "./components/newbookform/newBookForm";
import "./App.scss" ;
import Footer from "./components/footer/footer";

/*
function ParentComponent(props) {
  return (
    <div>{props.children}
    </div>
  )
}

function ChildComponent() {
  return <h1> I am a child component</h1>
}

export  function AnyComponent() {
  <ParentComponent>
    <ChildComponent />
     <p> This is a paragraph</p>
     <a href="">Click me</a>
  </ParentComponent>
}
*/

/*function GenericButton(props) {
  return <button style={props.style}>{props.children}</button>
}

export function PrimaryButton(props) {
  return (
  <GenericButton
    style={{
      backgroundColor: "blue",
      color: "white"
    }}
  >
    {props.children}
  </GenericButton>
  )
}
 export function DangerButton(props) {
  return (
    <GenericButton 
    style ={{
      backgroundColor: 'red', 
      color: "white"
    }}
    >
      {props.children}
      </GenericButton>
  )
 }
 */

function App() {
  const [books, setBooks] = useState(data.books);
  const [keyword, setKeyword] = useState("");
  const [showAddBookForm, setShowAddBookForm]= useState(false);

  /*
  function addBook(t){
    console.log(t);
}
*/
//the way below (arrow function) is another way to write the above function

  const addBook = () => {
  // create a new book
  console.log('here');
  const newBook = {
    id: 4,
    volumeInfo: {
      title: "Badass Habits",
      authors: ['Jen Something'],
      publisher: "Random House Digital, Inc.",
     publishedDate: "2005-11-15",
      description: " hello world Makhosi is practising react ",
    },
    price: 15.99
  }
  

  //this code below allows us to assign the id to take the next ID number after the last book instead of adding ID everytime
  const lastBook = books[books.length - 1]
  newBook.id =  lastBook.id + 1
  
 

  // update books state using setBooks (setBooks is used )
  setBooks(prevBooks => [...prevBooks, newBook]);
 
 }
 
 
  /*const findBooks = async (value) => {
    const results = await 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`)
    .then(response => response.json());

    if(!results.error) {
      setBooks(results.item);
    }
    console.log(value);
  }
  */

  const findBooks = async (value, startIndex) => {
    const results = await
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`)
      .then(response => response.json());

    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <Search searchValue={keyword} setSearchValue={setKeyword} searchBooks={findBooks} />
      {showAddBookForm ? <AddBookForm /> : <button className="add-new-book" onClick ={() => setShowAddBookForm(true)}> Add New Book</button> }
    < BookList books={books}  />
    < Footer />
    </React.Fragment>
  );
  }
// React.Fragment can be used as <> </> as a short form



export default App;



 
/*
 (backend stuff i dont need yet)
 await setTimeout(() => {
    console.log('ready to download')
  }, 1000);
  writeToFile(books)

const writeToFile = async (books) => {
  const outputData = {
    books: books
  }

  const jsonString = JSON.stringify(outputData)

  const blob = new Blob([jsonString],{type:'application/json'})
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = "newBooks.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
*/
