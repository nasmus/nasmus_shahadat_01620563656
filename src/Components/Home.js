import React from 'react'
import Header from './Header'
import '../CSS/Home.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

function Home() {
  return (
    <div className='home'>
        <Header />
        <div className='home__body'>
          <h1>Get Smarter about your career</h1>
          <p>Get the <strong>5-minute newsletter</strong> keeping about smart career</p>
          <div className='home__body__form'>
            <form method='post'>
              <span className='mail_icon' >
                <MailOutlineIcon />
              </span>
              <input className='input_field' type='email' name='email' placeholder='your E-mail address' />
                <button className='button' >Join Free</button>
            </form>
            <p>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home