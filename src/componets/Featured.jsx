import React from 'react'
import '../componentsStyles/Featured.scss';

export const Featured = () => {
  return (
    <div className='featured' >
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="../../public/images/search.png" alt="" />
                        <input type="text" placeholder='Try "building mobil app"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>popular :</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src='../../public/images/man.png' alt="" />
            </div>
        </div>
    </div>
  )
}