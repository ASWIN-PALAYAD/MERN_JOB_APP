import React from 'react';
import { Link } from 'react-router-dom';
import "./Orders.scss"

const Orders = () => {

  const currentUser = {
    id : 1,
    username: 'aswin s',
    isSeller : true
  }



  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser ? 'Buyer' : 'Seller'}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <img className='img' src="https://fiverr-res.cloudinary.com/video/upload/so_41.455744,t_gig_cards_web/cjdqfwntsvggngsxhvkd.png" alt="" />
              </td>
              <td>Gig 1</td>
              <td>777</td>
              <td>67889</td>
              <td>
                <img className='delete' src="/images/message.png" alt="" />
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
                <img className='delete' src="/images/message.png" alt="" />
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
                <img className='delete' src="/images/message.png" alt="" />
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
                <img className='delete' src="/images/message.png" alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders 