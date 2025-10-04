import './ProductList.css' // Optional CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>💅 Fashion Store</h3>
                <p>Your Fancy Fashion At Your Door-Step 🙏</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms and Conditions</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} Fashion Store | All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;