import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 E-Shop. All rights reserved.</p>
      <nav>
        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default Footer;
