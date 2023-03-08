import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer footer__container container">
                <h1 className="footer__title">Pablo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/paalvarador" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100090004698259" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="uil uil-facebook"></i>
                    </a>
                    <a href="https://github.com/paalvarador" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="uil uil-github"></i>
                    </a>
                    <a href="https://twitter.com/paalvarador" className="footer__social-link" target={'_blank'} rel="noreferrer">
                        <i class="uil uil-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; paalvarador. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer