import React from 'react'
import { Pagination } from 'semantic-ui-react'

class Paginate {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: null,
      dataStartingIndex: null,
      dataLastIndex: null,
      currentClickedNumber: 1,
      pageData: null,
    }
  }

  paginationExamplePagination = () => (
    <Pagination 
      defaultActivePage={5} 
      totalPages={20} 
      />
  )

}


export default PaginationExamplePagination