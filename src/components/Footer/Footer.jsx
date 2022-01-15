import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer-container' id='footer'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join The Adventure Newsletter To Receive Our Best Vacation Deals</p>
                <p className="footer-subscription-text">You Can Subscribe To Us At Any Time</p>
                <div className="input-area">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className='footer-input'/>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <NavLink to='/sign-up'>How it works</NavLink>
            <NavLink to='/'>Testimonials</NavLink>
            <NavLink to='/'>Careers</NavLink>
            <NavLink to='/'>Investors</NavLink>
            <NavLink to='/'>Terms of Service</NavLink>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>Support</NavLink>
            <NavLink to='/'>Destinations</NavLink>
            <NavLink to='/'>Sponsorships</NavLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <NavLink to='/'>Submit Video</NavLink>
            <NavLink to='/'>Ambassadors</NavLink>
            <NavLink to='/'>Agency</NavLink>
            <NavLink to='/'>Influencer</NavLink>
          </div>
          <div class='footer-link-items social_media'>
            <h2>Social Media</h2>
            <NavLink to='/'>Instagram</NavLink>
            <NavLink to='/'>Facebook</NavLink>
            <NavLink to='/'>Youtube</NavLink>
            <NavLink to='/'>Twitter</NavLink>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to='home' smooth={true}>
            <NavLink to='/' className='social-logo'>
                TRVL
                <i class='fab fa-typo3' />
            </NavLink>
          </Link>
            
          </div>
          <small class='website-rights'>TRVL © 2021</small>
          <div class='social-icons'>
            <NavLink
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </NavLink>
            <NavLink
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </NavLink>
            <NavLink
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </NavLink>
            <NavLink
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </NavLink>
            <NavLink
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </NavLink>
          </div>
        </div>
      </section>    
    </div>
    )
}

export default Footer

