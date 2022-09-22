import React from 'react'
import './style.css';
import myImage from '../../Images/individualIcon.png';


const Home = () => {
  return (
    <>
      <div className='heading' align="center" >
        <h1>
          SCRAP TO US <br />
          FOR GOOD VALUE
        </h1>
        <span>Sell your scrap and help contibute to circular economy</span>
      </div>

      <div className='individuals' >
        <div>
          <img src={myImage} alt="" />
        </div>
        <div>
          <span>Any individual can sell their scrap to us to ensure healthy environment</span>
        </div>
      </div>


      {/* 
      import { BrowserRouter as Router, Link } from 'react-router-dom';
import myImage from 'C:\Users\srika\Desktop\Project\scrapyardreact\public\Images\individualIcon.png';

      
      <Router>
      <div>
        <Link to="/individual">
          <img src={myImage} alt="I" />
        </Link>
        </div>
      </Router>*/}

      {/* <div className='individuals'>
      <img src='C:\Users\srika\Desktop\Project\scrapyardreact\public\Images\recycle1.png' className='img-fluid' alt='Indvidual-img' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Any individual can sell their scrap to us to ensure healthy environment</p>
        </div>
      </div>
    </div> */}

    </>
  )
}

export default Home