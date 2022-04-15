import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './Components/Pagination/Pagination';
import Cards from './Components/Cards/Cards';
import * as foamApi from './utils/foamApi';

function App() {

  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [picturesPerPage] = useState(20);

  const foamPage = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220414T213821Z&X-Amz-Expires=86400&X-Amz-Signature=ee5ddc364d2dc7e86281402d83d0e56470d149caca3c5680e5cfae1e94e52539&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject";

  useEffect(() => {
    fetch(foamPage)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(data)
      // setLoading(false)
    })
  }, [])

  console.log(data, "This is the data")

  const indexOfLastPicture = currentPage * picturesPerPage;

  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;

  const currentPicture = data.slice(indexOfFirstPicture ,indexOfLastPicture);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function foam(foamId){
    try{
      const data = await foamApi.create(foamId);
    }catch(err){
      console.log("error at foam function @ app.js")
    }
  }

  async function noFoam(foamId){
    try{
      const data = await foamApi.deleteFoam(foamId);
    }catch(err){
      console.log("error at noFoam function @ app.js")
    }
  }

  return (
    <>
      <h1>Foam Take Home Challenge</h1>
      <Cards 
        data={currentPicture}
        foam={foam}
        noFoam={noFoam}
      />
      
      <Pagination 
        picturesPerPage={picturesPerPage} 
        totalPictures={data.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
