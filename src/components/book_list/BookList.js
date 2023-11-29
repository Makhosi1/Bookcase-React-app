import Book from "../book/book";

export function BookList({ books, addBookEventHandler }) {
    if (books.length === 0) {
        return <h1>No Books</h1>
    }

    return (
        <div>
            {books.map(i => <Book key={i.id} bookProps={i} />)}
        </div>
    )
};

