import Link from "next/link";
import Instagram from "./img/instagram.svg";
import Tiktok from "./img/tiktok.svg";
import "../../style.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Kontakt Randi</h4>
          <p>Mobil: 123 45 678</p>
          <p>Mail: randi@gmail.com</p>
          <h4>Kontakt Randisstrikkeklubb</h4>
          <p>Mobil: 456 98 362</p>
          <p>Mail: randistrikkeklubb@gmail.com</p>
        </div>
        <div className="footer-language">
          <p>Språk/region: Norway</p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>2023 randistrikkeklubb AS</p>
        <div className="footer-social-icons">
          <Instagram height={20} width={20} onClick={() => window.location.href = "https://www.instagram.com"} />
          <Tiktok height={20} width={20} onClick={() => window.location.href = "https://www.tiktok.com"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;