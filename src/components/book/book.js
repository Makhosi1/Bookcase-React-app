import PropTypes from "prop-types";

function Book({ bookProps }) {

  let { price, volumeInfo: { title, authors, description } } = bookProps;



  return (
    <div>
      <h1>{title === "" ? "No Title" : title}</h1>
      <ul>
        {
          authors
            ? (
              authors.map(author => (
                <li key={author}>{author}</li>
              ))
            )
            : "No Authors Listed"
        }
      </ul>
      <p>{description ? description : "No description Provided."}</p>
      <p>{price ? `£${price}` : "No Price Available"}</p>
      {/*<button onClick ={() => addBook(title)}>Add + </button>*/}

    </div>
  )
}

//  we can use the tinary operator ? return if it is true and : return when it is not as this helps reduce errors and be able to display on the DOM 

Book.propTypes = {
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  volumeInfo: PropTypes.shape(
    { title: PropTypes.string.isRequired },
    { authors: PropTypes.array.isRequired },
  )

}

Book.defaultProps = {
  price: "No Price Available"
}

export default Book;

/*
books = [book1, book2, book3] // prevBooks
newBook = book4 

books = [books[everything in books], book4]

[book1, book2, book3, book4]
[[book1, book2, book3], book4]


function anon(prevBooks) {
  return [
    ...prevBooks,
    newbook
  ]
}

user = {
  name: "Noma",
  age: 20
}

user = {
  ...user,
  age: 21
}
*/