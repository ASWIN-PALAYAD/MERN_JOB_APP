import React from 'react';
import { Link } from 'react-router-dom';
import "./Messages.scss"

const Messages = () => {

  const currentUser = {
    id : 1,
    username: 'aswin s',
    isSeller : true
  }

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores repellendus neque molestiae sunt, error corrupti dicta facere, iure, quam amet. Reprehenderit repellendus, sed placeat animi nemo recusandae dolore accusantium.`



  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
                Aswin s
              </td>
              <td> <Link  className='link'  to='/message/123' >{message.substring(0,100)}...</Link> </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>

            <tr className='active'>
              <td>
                Aswin s
              </td>
              <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>

            <tr>
              <td>
                Aswin s
              </td>
              <td><Link  className='link'  to='/message/123' >{message.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>

            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Messages 