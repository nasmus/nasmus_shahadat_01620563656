import React from 'react'
import '../CSS/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import short_logo from '../image/short-logo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_icon' >
            <a href='' ><FacebookIcon /> </a>
            <a href='' ><YouTubeIcon /> </a>
            <a href='' ><LinkedInIcon /> </a>
        </div>
        <div className='footer_content'>
            <div className='footer_content_left'>
                <img src={short_logo} alt='' />
                <p>Desh Career is Career based newsletter in Bengali language.&nbsp; This newsletter has published weekly. This is published in every Saturday at 12.00 PM</p>
            </div>
            <div className='footer_content_middle'>
                <h4>Privacy And  Terms</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Condition</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='footer_content_right'>
                <h4>Support</h4>
                <ul>
                    <li>Affilite Link</li>
                    <li>Contact Us</li>
                    <li>Advertise with us</li>
                </ul>
            </div>
        </div>
        <hr className='divider' />
        <div className='footer_buttom'>
            <div className='footer_buttom_left'>
                <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
            </div>
            <div className='footer_buttom_right'>
                <a href=''>Terms</a>
                <a href=''>Cookie Policy</a>
                <a href=''>Terms</a>
                <a href=''>Privacy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer