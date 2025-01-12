import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer-main'>
        <div className='footer-section-left'>
            <p>Website is a product of Get Digital</p>
        </div>

        <div className='footer-section-middle'>
            <ul>
                <li>
                    <a href='/terms-and-conditions'>Terms and Conditions</a>
                </li>
                <li>
                    <a href='/privacy-policy'>Privacy Policy</a>
                </li>
            </ul>
        </div>

        <div className='footer-section-right'>
            <p>Copyright &copy; Get Digital All Rights Reserved</p>
        </div>
    </footer>
  )
}
