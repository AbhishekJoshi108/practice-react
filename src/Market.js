import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';


const Market = (props) => {
    return (
        <>
            <div className='col-md-4 mt-3'>
                <div className="card shadow card-1">
                    <img src={props.set.thumbnail} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{props.set.brand}</h5>
                        <p className="card-text">{props.set.description.slice(0, 100)}</p>
                        <div className='d-flex justify-content-between'>
                            <p>{props.set.category}</p>
                            <p style={{ fontWeight: 500 }}>Discount {props.set.discountPercentage}%</p>
                        </div>
                        <p style={{lineHeight:0}}>{props.set.rating}</p>
                        <div className='rating d-flex justify-content-between'>
                       
                            <div className='icons-col'> 
                           

                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>

                               <h3 className='text-warning'><FontAwesomeIcon icon={faIndianRupeeSign} />{props.set.price}</h3>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Market
