import './style.css'
export const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src="/logo.png" alt="logo" />
            <img src="/Dekoor.svg" alt="logo" />
        </div>
        <div className="menu">
            <a href="#">About Us</a>
            <div className="dropdown">
                <a href="#">Furniture</a>
                <img src="/button/keyboard_arrow_down.svg" alt="" />
            </div>
            <a href="#">Partnerships</a>
            <a href="#">Contact</a>
        </div>
        <div className="signup">
            <button>Sign up</button>
            <div className="checkout">
                <img src="/button/shopping_bag.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
