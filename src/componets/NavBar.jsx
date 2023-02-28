import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../componentsStyles/NavBar.scss"

const NavBar = () => {

    const {pathname} = useLocation();

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
      window.addEventListener('scroll', isActive)
    
      return () => {
        window.addEventListener('scroll',isActive)
      }
    }, [])
    
    const currentUser = {
        id : 1,
        username: 'aswin',
        isSeller : true
    }



  return (
    <div className={active  || pathname !== '/' ? "navbar active " : "navbar" }>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link' >
                    <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Bussiness</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span> }
                {!currentUser && <button>Join</button> }
                {currentUser && (
                    <div className="user" onClick={()=> setOpen(!open)} >
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && (
                            <div className="options">
                            {currentUser?.isSeller && (
                                <>
                                <Link className='link' to='/mygigs'>Gigs</Link>
                                <Link className='link' to='/add'>Add New Gigs</Link>
                                </>
                            )}
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' to='/logout'>Logout</Link>
                        </div>
                        )}
                    </div>
                )}
                
            </div>
        </div>
        { (active || pathname !== '/') &&
            <>
                    <hr />
                <div className="menu">
                    <span>test 1</span>
                    <span>test 20</span>
                </div>
            </>
        }
    </div>
  )
}

export default NavBar