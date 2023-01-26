import gpt from '../../assets/gpt.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer section-padding">
            <div className="footer-heading">
                <h1 className="gradient-text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={gpt} alt="logo" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className="footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>(11) 2754-0001</p>
                    <p>mark@gmail.com</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2021 Mark-GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
