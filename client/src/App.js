import './App.css';
import { useEffect, useState } from 'react';
import Buttons from './Components/Buttons/Buttons';
import Pagination from './Components/Pagination/Pagination';
import Cards from './Components/Cards/Cards';

function App() {

  const [data, setData] = useState([]);
  // const [dataFromPagination, setDataFromPagination] = useState(null);
  // const [picturesPerPage] = useState(10);

  const foamPage = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T003306Z&X-Amz-Expires=86400&X-Amz-Signature=6d69bccc9dd7f39a98dbceda38d0dd7a887abdbb16abdd5a55be3a5cc5f7111d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject";

  useEffect(() => {
    fetch(foamPage)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(data)
    })
  }, [])

  console.log(data)

  return (
    <>
      <h1>Foam Take Home Challenge</h1>
      <Cards />
      <Buttons />
      <Pagination />
    </>
  );
}

export default App;
