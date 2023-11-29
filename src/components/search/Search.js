export default function Search({searchValue, setSearchValue, searchBooks}){
   
    // searchValue props is a placeholder for the state that we are expecting on app.js
    // setsearchValue prop is a placeholderr for the "update state" 

const handleSubmit = (e) => {
    e.preventDefault(); // this will stop the page from reloading

    // function that will update the book
    searchBooks(searchValue);

}

    return(
        <form onSubmit={handleSubmit}>
             {searchValue && <p>{searchValue}</p>} 
            <input 
            type ="search"
            value={searchValue}
            onChange= {e => setSearchValue(e.target.value)}
            />
            <button> Submit </button>
        </form>
    )
}

