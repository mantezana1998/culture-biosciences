import React from 'react'
import { Pagination } from 'semantic-ui-react'

  function PaginationExamplePagination(){

    function handlePageChange(data){
      console.log(data.selected)
    }

    return(
      <Pagination 
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={20}
        onClick={handlePageChange}
      />
    )
  }

export default PaginationExamplePagination;