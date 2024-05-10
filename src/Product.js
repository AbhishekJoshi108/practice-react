import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import Market from './Market';
import Pagination from 'react-bootstrap/Pagination';
import Header from './Header';




const Product = () => {

  const [set, setstate] = useState([]);
  const [pagedata, setpagedata] = useState([]);
  const [page, setpage] = useState(1);
  const [pagecount, setpagecount] = useState(0);

  const handlenext = () => {
    if (page === pagecount)
      return page;
    setpage(page + 1);
  }

  const handlepre = () => {
    if (page === 1)
      return page;
    setpage(page - 1)
  }

  //useeffect for pagination
  useEffect(() => {
    const pagedatacount = Math.ceil(set.length / 6);
    setpagecount(pagedatacount);
    if (page) {
      const limit = 6;
      const skip = limit * page
      const dataskip = set.slice(page === 1 ? 0 : skip - limit, skip);
      setpagedata(dataskip);
    }
  }, [set])


  //useeffect for api data fetch
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res)
        setstate(res.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [page])



  return (
    <>
      <Header />
      <div className='container'>
        <div className='justify-content-center d-flex mt-4'>

          <Pagination>
            <Pagination.Prev onClick={handlepre} disabled={page === 1} />
            {
              Array(pagecount).fill(null).map((ele, ind) => {
                return (
                  <>
                    <Pagination.Item active={page === ind + 1 ? true : false} onClick={() => setpage(ind + 1)}>{ind + 1}</Pagination.Item>

                  </>
                )
              })
            }

            <Pagination.Next onClick={handlenext} disabled={page === pagecount} />
          </Pagination>

        </div>
        <div className='row'>
          {
            Object.values(pagedata).map((pagedata, index) =>



              <Market set={pagedata} />
            )





          }

        </div>



      </div>










    </>
  )
}

export default Product
