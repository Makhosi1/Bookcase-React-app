import React, { useEffect, useState } from "react";
//import data from "./models/books.json";
import { BookList } from "./components/book_list/BookList";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddBookForm from "./components/newbookform/newBookForm";
import "./App.scss";
import Footer from "./components/footer/footer";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [keyword, setKeyword] = useState("tech");
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [totalBooks, setTotalBooks] = useState(0);
  const [books, setBooks] = useState([[], []]);


  const flattenArray = (arr) => {
    return [].concat(...arr)
  }

  const chunkArray = (books, itemsPerPage) => {

    // flatten array
    books = flattenArray(books)

    // chunk array 
    return books.reduce((prevArray, currentBook, index) => {
      const chunkIndex = Math.floor(index/itemsPerPage); // 1

      if (!prevArray[chunkIndex]) {
        prevArray[chunkIndex] = []
      }

      prevArray[chunkIndex].push(currentBook);
      return prevArray
    }, [])
  }

  const findBooks = async () => {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((response) => response.json());

    if (!results.error) {
      setTotalBooks(results.items.length);
      setCurrentPage(0)
      setBooks(chunkArray(results.items, itemsPerPage))
    }
  };

  useEffect(() => {
    findBooks();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Search
        searchValue={keyword}
        setSearchValue={setKeyword}
        searchBooks={findBooks}
      />
      <select onChange={(event) => {
        const value = event.target.value;

        setItemsPerPage(value)
        setCurrentPage(0)
        setBooks(chunkArray(books, value))
      }}>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>10</option>
      </select>
      {showAddBookForm ? (
        <AddBookForm />
      ) : (
        <button
          className="add-new-book"
          onClick={() => setShowAddBookForm(true)}
        >
          {" "}
          Add New Book
        </button>
      )}
      <BookList books={books[currentPage]} />
      <Pagination
        nPages={totalBooks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <Footer />
    </React.Fragment>
  );
}
// React.Fragment can be used as <> </> as a short form

export default App;
