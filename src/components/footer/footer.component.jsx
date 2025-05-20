import React from 'react';

import "./footer.styles.css";

const Footer = props => {
    return (
        <footer className="footer">
            <p className="footer__title">Duy Trinh Phan</p>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/duytrinh-phan-17922b289/" className="footer__icon"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/duytrinhphan" className="footer__icon"><i className="bx bxl-github"></i></a>
            </div>
            <p>&#169; 2025 copyright Duy Trinh Phan</p>
        </footer>
    )
}

export default Footer;