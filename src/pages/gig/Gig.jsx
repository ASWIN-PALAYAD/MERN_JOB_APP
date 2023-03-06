import { Slider } from 'infinite-react-carousel/lib';
import React from 'react';
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Graphics & Design > Logo Design</span>
          <h1>I will create a unique minimalist</h1>

          <div className="user">
            <img className='pp' src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" alt=" " />
            <span>aswin s</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className='slider' >
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/231178326/original/dc3060dcd339e6fd5fc89c0fc966a3515ff602aa/create-a-flat-logo-design.jpg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/231178326/original/107dbdcd139fc6a424b09b06e476260101d6b6b2/create-a-flat-logo-design.jpg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/231178326/original/a0e816ef9fda349fefc781d02b52f27fc9577fab/create-a-flat-logo-design.jpg" alt="" />
          </Slider>

          <h2>About This Gig</h2>
          <p>Welcome to our Flat Logo Design Gig!
            We are a full-service art team, who delivers inspired, effective, modern, intelligent work, from logos to all services connected with graphic design.
            Whether you're a larger organization, a small company or an individual, we manage every project with the same high level of passion and respect.
            Were in the business of giving your brand a hyper boost, not just a logo design.
          </p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img  src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" alt="" />
              <div className="info">
                <span>Aswin s</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className='title' >From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className='title' >Member since</span>
                  <span className="desc">Aug 2018</span>
                </div>
                <div className="item">
                  <span className='title' >Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className='title' >Last delivery</span>
                  <span className="desc">about 17 hours</span>
                </div>
                <div className="item">
                  <span className='title' >Languages</span>
                  <span className="desc">Sinhala, English</span>
                </div>
              
              </div>
              <hr />
              <p>
                Having successfully managed over 400+ client engagements and more than 500+ unique projects for some of the world’s best-loved brands over the past 10 years, we are proud to be considered a thought leader in the web and graphic designing arena. We have worked with clients across 40+ countries including England, Australia, United States, Germany, UAE, Canada, Japan, Singapore, India, SouthAfrica etc.
              </p>
            </div>

          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" alt="" />
                <div className="info">
                  <span>aswin S</span>
                  <div className="country">
                    <img src="https://media.istockphoto.com/id/1349796126/photo/flag-of-india.jpg?b=1&s=170667a&w=0&k=20&c=1pWIs3VkXqu1wNBGcztG5IixaN4oGA-nul4Ynb1G2QY=" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Having successfully managed over 400+ client engagements and more than 500+ unique projects for some of the world’s best-loved brands over the past 10 years, we are proud to be considered a thought leader in the web and graphic designing arena. We have worked with clients across 40+ countries including England, Australia, United States, Germany, UAE, Canada, Japan, Singapore, India, SouthAfrica etc.
              </p>
              <div className="helpfull">
                <span>Helpfull?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" alt="" />
                <div className="info">
                  <span>aswin S</span>
                  <div className="country">
                    <img src="https://media.istockphoto.com/id/1349796126/photo/flag-of-india.jpg?b=1&s=170667a&w=0&k=20&c=1pWIs3VkXqu1wNBGcztG5IixaN4oGA-nul4Ynb1G2QY=" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Having successfully managed over 400+ client engagements and more than 500+ unique projects for some of the world’s best-loved brands over the past 10 years, we are proud to be considered a thought leader in the web and graphic designing arena. We have worked with clients across 40+ countries including England, Australia, United States, Germany, UAE, Canada, Japan, Singapore, India, SouthAfrica etc.
              </p>
              <div className="helpfull">
                <span>Helpfull?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" alt="" />
                <div className="info">
                  <span>aswin S</span>
                  <div className="country">
                    <img src="https://media.istockphoto.com/id/1349796126/photo/flag-of-india.jpg?b=1&s=170667a&w=0&k=20&c=1pWIs3VkXqu1wNBGcztG5IixaN4oGA-nul4Ynb1G2QY=" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Having successfully managed over 400+ client engagements and more than 500+ unique projects for some of the world’s best-loved brands over the past 10 years, we are proud to be considered a thought leader in the web and graphic designing arena. We have worked with clients across 40+ countries including England, Australia, United States, Germany, UAE, Canada, Japan, Singapore, India, SouthAfrica etc.
              </p>
              <div className="helpfull">
                <span>Helpfull?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

          </div>


        </div>
        <div className="right">
            <div className="price">
              <h3>1 AI generated image</h3>
              <h2> $ 59.8</h2>
            </div>
            <p>
            4 logo options to chose from: Logo branding guideline & Transfer of Copyright Document (TOC)
            </p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="" />
                <span>2 days Delivery</span>
              </div>
              <div className="item">
                <img src="/images/recycle.png" alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="featuress">
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig