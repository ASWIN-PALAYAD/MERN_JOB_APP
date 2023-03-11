import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import "./Orders.scss"

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));


  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(`/orders/`).then((res)=> {
        return res.data
      })
  });



  return (
    <div className="orders">
      {isLoading ? 'loading.....' : error ? 'Somthing went wrong' : (
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
              <th>Contact</th>
            </tr>

            {data.map( order => (
              <tr key={order._id} >
              <td>
                <img className='img' src={order.img} alt="" />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <img className='delete' src="/images/message.png" alt="" />
              </td>
            </tr>
            ))}
            
          </table>
        </div>
      </div>
      )}
    </div>
  )
}

export default Orders 