export default function Pagination({
  nPages,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  
  const lastPage = Math.ceil(nPages / itemsPerPage);
  const pageNumbers = [...Array(lastPage).keys()];

  // pageNumbers.shift(); // remove zero index so array starts from 1
  // pageNumbers.push(lastPage); // add the last element to the array

  return (
    <>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage === pgNumber ? "active" : ""
              }`}
            >
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className="page-link"
                href="#"
              >
                {pgNumber + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              disabled={currentPage === lastPage - 1}
              onClick={() => setCurrentPage(currentPage + 1)}
              href="#"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

// ANOTHER WAY TO GET COMPONENT PROPS

// const nPages = props.nPages; // 100
// const itemsPerPage = props.itemsPerPage; // 10
// const currentPage = props.currentPage;
// const setCurrentPage = props.setCurrentPage;
