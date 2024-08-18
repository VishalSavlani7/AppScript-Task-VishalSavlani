import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>BE THE FIRST TO HIRE ME</h4>
          <p>Mail me, if I am selected.</p>
          <div className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="visshalsavlani44@gmail.com"
              className={styles.subscribeInput}
            />

            <button type="button" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>CONTACT US</h4>
          <p>9586666118</p>
          <p>visshalsavlani44@gmail.com</p>
          <h4>CURRENCY</h4>
          <p>
            <img
              src="/assets/IND.png"
              alt="INDIAN CURRENCY"
              className={styles.flagIcon}
            />{" "}
            IND
          </p>
          <p>Salary will be negotiable but zyada nahi haa...</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerSection}>
          <h4>OTHER</h4>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>About Us</li>
            <li className={styles.footerListItem}>Stories</li>
            <li className={styles.footerListItem}>Boutiques</li>
            <li className={styles.footerListItem}>Contact Us</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>LINKS</h4>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>Orders & Shipping</li>
            <li className={styles.footerListItem}>Join/Login as a Seller</li>
            <li className={styles.footerListItem}>Payment & Pricing</li>
            <li className={styles.footerListItem}>Return & Refunds</li>
            <li className={styles.footerListItem}>FAQs</li>
            <li className={styles.footerListItem}>Privacy Policy</li>
            <li className={styles.footerListItem}>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSocial}>
            <h4>FOLLOW US</h4>
            <p>
              <img
                src="/assets/instagram.png"
                alt="Instagram/AppScript"
                className={styles.socialIcon}
              />
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn/AppScript"
                className={styles.socialIcon}
              />
            </p>
          </div>
          <div className={styles.footerPayment}>
            <h4>ACCEPTS</h4>
            <p>Google Pay</p>
          </div>
        </div>
      </div>
      <div className={styles.footerCopy}>
        <p>Created by Vishal Savlani.</p>
      </div>
    </footer>
  );
};

export default Footer;
