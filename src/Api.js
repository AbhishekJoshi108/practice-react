// import { config } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {

    const[user,setuser]=useState({
           "url":"",
           "description":""
    })

    const inputhandler=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }
    const datasubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/product",user)
        .then((res)=>{
            console.log(res)
            alert("data submitted")
            setuser({
                "url":"",
                "description":""
            });
            // e.target.reset();
        }).catch((err)=>{
            console.log(err);
        })

    }

    const datadelete=(e)=>{
        e.preventDefault();
                    // <button className='btn btn-primary'>POST</button>
        axios.delete("http://localhost:4000/product/9")
        .then((res)=>{
            console.log(res)
            alert("data delete");
        }).catch((err)=>{
            console.log(err)
        })
    }
    const dataUpdate=(e)=>{
        e.preventDefault();
                    // <button className='btn btn-primary'>POST</button>
        axios.put("http://localhost:4000/product/1",user)
        .then((res)=>{
            console.log(res);
            alert("updated")
        }).catch((err)=>{
            console.log(err)
        })
            
    }
    return (
        <>
            <div className='col-md-5 bg-warning border p-5'>
                <form onSubmit={datasubmit}>

                    <input type='text' name="url" value={user.url} onChange={inputhandler} className='form-control' placeholder='image' />
                    <input type='text' name="description" value={user.description} onChange={inputhandler} className='form-control mt-4' placeholder='description' />
                    <button className='btn btn-primary'>POST</button>
                    <button className='btn btn-success ms-3' onClick={datadelete}>delete</button>
                    <button className='btn btn-success ms-3' onClick={dataUpdate}>update</button>




                </form >
            </div>
        </>
    )
}

export default Api
