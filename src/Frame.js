import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Scene from './Scene'
import './App.css';


const Frame = () => {

    const [krsna, setkrsna] = useState([]);
    const[currentpage,setcurrentpage]=useState(1);
    const[postperpage,setpostperpage]=useState(2);

    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/photos")
        axios.get(" https://api.thecatapi.com/v1/images/search?limit=20")
            .then((res) => {
                setkrsna(res.data)
                console.log(res)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
   
    
    return (
        <>
            <h1 className='text-danger text-center'>get pics from api by using axios </h1>
            {/* <div className='container'> */}
            {/* <div className='row'> */}
            <div className='container-fluid'>
                <div className='row'>
                    {

                        krsna.map((krsna) => (


                            <Scene krsna={current} />









                        ))
                    }

                </div>


            </div>

            {/* </div> */}


            {/* </div> */}


        </>
    )
}

export default Frame
