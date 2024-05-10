import React from 'react'
import './App.css';



const Scene = (props) => {
    console.log(props)
   
    return (
        <>
            {/* <div className='container-fluid'> */}
            {/* <div className='row'> */}
            <div className='col-md-3'>
                <div className="card shadow mt-3">
                    <img className="img-fluid" src={props.krsna.url} height={500} width={500}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.krsna.id}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div >


            {/* // </div > */}


        {/* // </div> */}
          

        </>
    )
}

export default Scene
