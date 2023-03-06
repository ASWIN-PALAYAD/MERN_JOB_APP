import React from 'react';
import { Link } from 'react-router-dom';
import "./MyGigs.scss"

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'><button>Add New Gig</button></Link>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img' src="https://fiverr-res.cloudinary.com/video/upload/so_41.455744,t_gig_cards_web/cjdqfwntsvggngsxhvkd.png" alt="" />
              </td>
              <td>Gig 1</td>
              <td>777</td>
              <td>67889</td>
              <td>
                <img className='delete' src="/images/delete.png" alt="" />
              </td>
            </tr>

            <tr>
              <td>
                <img className='img' src="https://fiverr-res.cloudinary.com/video/upload/so_41.455744,t_gig_cards_web/cjdqfwntsvggngsxhvkd.png" alt="" />
              </td>
              <td>Gig 1</td>
              <td>777</td>
              <td>67889</td>
              <td>
                <img className='delete' src="/images/delete.png" alt="" />
              </td>
            </tr>

            <tr>
              <td>
                <img className='img' src="https://fiverr-res.cloudinary.com/video/upload/so_41.455744,t_gig_cards_web/cjdqfwntsvggngsxhvkd.png" alt="" />
              </td>
              <td>Gig 1</td>
              <td>777</td>
              <td>67889</td>
              <td>
                <img className='delete' src="/images/delete.png" alt="" />
              </td>
            </tr>

            <tr>
              <td>
                <img className='img' src="https://fiverr-res.cloudinary.com/video/upload/so_41.455744,t_gig_cards_web/cjdqfwntsvggngsxhvkd.png" alt="" />
              </td>
              <td>Gig 1</td>
              <td>777</td>
              <td>67889</td>
              <td>
                <img className='delete' src="/images/delete.png" alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyGigs 