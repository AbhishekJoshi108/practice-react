import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Pagination from 'react-bootstrap/Pagination';





const Table = () => {
    const [user, setuser] = useState([])

    const [pagedata, setpagedata] = useState([]);


    const [page, setpage] = useState(1);


    const [pagecount, setpagecount] = useState(0);
    useEffect(() => {
        // axios.get("http://localhost:3000/product")
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res)
                setuser(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page])

    const handlenext = () => {
        if (page === pagecount) return page;
        setpage(page + 1)

    }

    const handlepre = () => {
        if (page === 1) return page;

        setpage(page - 1)

    }

    useEffect(() => {
        const pagedatacount = Math.ceil(user.length / 5);
        setpagecount(pagedatacount);
        if (page) {
            const limit = 5
            const skip = limit * page // 5 *1=5
            const dataskip = user.slice(page === 1 ? 0 : skip - limit, skip);
            setpagedata(dataskip);
        }
    }, [user])
    return (
        <>
            <table width="100%">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(pagedata).map((pagedata) => {
                            return (
                                <>
                                    <tr>
                                        <td>{pagedata.id}</td>
                                        <td>{pagedata.title}</td>
                                        <td>{pagedata.price}</td>
                                        <td><img src={pagedata.thumbnail} height={90} width={90} className='img-fluid' /></td>

                                    </tr>
                                </>

                            )

                        })

                    }


                </tbody>



            </table>
            <div className='d-flex justify-content-center mt-3'>
                <Pagination>

                    <Pagination.Prev onClick={handlepre} disabled={page === 1} />
                    {
                        Array(pagecount).fill(null).map((ele, ind) => {
                            return (
                                <>
                                    <Pagination.Item active={page=== ind+1?true:false} onClick={()=>setpage(ind+1)}>{ind + 1}</Pagination.Item>

                                </>
                            )
                        })
                    }


                    <Pagination.Next onClick={handlenext} disabled={page === pagecount} />
                </Pagination>

            </div>







        </>
    )
}

export default Table
