import { Button } from "../Shared/Button/Button";
import "./style.css";
export const Header = () => {
  return (
    <div className={`header title_16`}>
      <div className="logo">
        <img
          src="/logo.svg"
          alt="logo"
          style={{ width: "3rem", height: "3rem" }}
        />
        <img
          src="/Dekoor.svg"
          alt="logo"
          style={{ width: "6.22rem", height: "1.417rem" }}
        />
      </div>
      <div className="menu">
        <a href="#">About us</a>
        <div className="dropdown">
          <a href="#">Furniture</a>
          <div className="icon">
            <img src="/button/keyboard_arrow_down.svg" alt="" />
          </div>
        </div>
        <a href="#">Partnerships</a>
        <a href="#">Contact</a>
      </div>
      <div className="signup">
        <Button bg="var(--color-sour)" p="0.75rem 1.5rem">
          Sign Up
        </Button>
        <Button bg="var(--color-brightBrown)">
          <img src="/button/shopping_bag.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
