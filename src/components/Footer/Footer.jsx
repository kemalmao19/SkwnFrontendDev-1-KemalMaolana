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
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Care guide</p>
          <p>Reedem warranty</p>
        </div>
        <div className="menu">
          <h1 className="title_20">Social Media</h1>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Tiktok</p>
        </div>
        <div className="menu">
          <h1 className="title_20">About Us</h1>
          <p>Our story</p>
          <p>Designer</p>
          <p>Craftmanship</p>
          <p>Sustainability</p>
        </div>
      </div>
    </div>
  );
};
