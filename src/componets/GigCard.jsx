import React from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyles/GigCard.scss';

const GigCard = ({ item }) => {
    return (
        <Link to='/gig/123' className='link'>
            <div className="gigCard">
                {/* <div className="container"> */}
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.dec}</p>
                    <div className="star">
                        <img src="/images/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className="details">
                    <img src='/images/heart.png' alt="" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>{item.price}</h2>
                    </div>

                </div>
                {/* </div> */}
            </div>
        </Link>
    )
}

export default GigCard