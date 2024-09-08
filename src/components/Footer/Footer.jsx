import "./style.css";

export const Footer = () => {
  return (
    <div className="footer description_16">
      <div className="grid_container">
        <div className="footerHead">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <p className="info">
              Dekoor is a furniture company created to fulfill the needs of
              family with aesthetic feeling in their furniture. Always pay
              attention to details and give clear communication for the
              customers. Priority of our design is comfortability.
            </p>
          <p className="copyright">©Copyright 2022 Dekoor</p>
        </div>
        <div className="menu">
          <h1 className="title_20">Support</h1>
          <a href="">FAQ</a>
          <a href="">Shipping & Returns</a>
          <a href="">Care guide</a>
          <a href="">Reedem warranty</a>
        </div>
        <div className="menu">
          <h1 className="title_20">Social Media</h1>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Tiktok</a>
        </div>
        <div className="menu">
          <h1 className="title_20">About Us</h1>
          <a href="">Our story</a>
          <a href="">Designer</a>
          <a href="">Craftmanship</a>
          <a href="">Sustainability</a>
        </div>
      </div>
    </div>
  );
};
