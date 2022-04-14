import React from 'react'

  function PaginationExamplePagination({ picturesPerPage, totalPictures, paginate }){

    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(totalPictures / picturesPerPage); i++){
      pageNumbers.push(i);
    }

    return(
    <>
      <nav>
        <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        </ul>
      </nav>
    </>
    )
  }

export default PaginationExamplePagination;