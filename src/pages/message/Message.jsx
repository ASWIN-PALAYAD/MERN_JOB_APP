import React from 'react';
import { Link } from 'react-router-dom';
import './Message.scss'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link className='link' to='/messages'>MESSAGES</Link > > ASWIN S > 
        </span>

        <div className="messages">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>

          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>

          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>

          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate officiis ut dolore rerum sunt, perspiciatis facilis eius? Soluta ex maiores voluptate ab nostrum magni exercitationem sit dolor velit nam.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message 