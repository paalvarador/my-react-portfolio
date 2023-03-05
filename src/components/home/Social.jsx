import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/paalvarador" className="home__social-icon" target={'_blank'} rel="noreferrer">
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090004698259" className="home__social-icon" target={'_blank'} rel="noreferrer">
            <i class="uil uil-facebook"></i>
        </a>
        <a href="https://github.com/paalvarador" className="home__social-icon" target={'_blank'} rel="noreferrer">
            <i class="uil uil-github"></i>
        </a>
        <a href="https://twitter.com/paalvarador" className="home__social-icon" target={'_blank'} rel="noreferrer">
            <i class="uil uil-twitter"></i>
        </a>
    </div>
  )
}

export default Social