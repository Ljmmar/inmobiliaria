import React from "react"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <ul></ul>
            <li>Email: noname@gmail.com</li>
            <li>Phone: (123) 456-7890</li>
            <h6>© 2023 noname, Inc.</h6>
          </div>
         
          <div className="footer-section">

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/acerca">About us</a></li>
              <li><a href="/contacto">Contact</a></li>
            </ul>
          </div>
          <div className="footer-icon">
            <ul>
              <a href="https://www.facebook.com/"> <img src='./public/icons/facebook.png' alt="Logo" /></a>
              <a href="https://twitter.com/">  <img src='./public/icons/twitterx.png' alt="Logo" /></a>
              <a href="https://www.instagram.com/"><img src='./public/icons/instagram.png' alt="Logo" /></a>
              <a href="https://www.youtube.com/"><img src='./public/icons/youtube.png' alt="Logo" /></a>
              <a href="https://www.tiktok.com/en/"><img src='./public/icons/tiktok.png' alt="Logo" /></a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer