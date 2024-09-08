import "./style.css";

const items = [
  {
    icon: "/icons/search.svg",
    title: "MANUFACTURED WITH QUALITY MATERIALS",
  },
  {
    icon: "/icons/5.svg",
    title: "5 YEARS OF WARRANTY FOR EACH PRODUCT",
  },
  {
    icon: "/icons/work_outline.svg",
    title: "20 YEARS OF EXPERTISE",
  },
];

const icons = [
  "/icons/gusto.svg", "/icons/stripe.svg", "/icons/treehouse.svg", "/icons/upwork.svg" ]

export const Limited = () => {
  return (
    <div className="limited">
      <div className="limited_section">
        <div className="title_24">LIMITED DEALS</div>
        <div className="title_64">
        Become a member and get 10% off of your first purchase
        </div>
        <form className="email">
          <input type="text" placeholder="Enter your email here" className="title_24" />
          <div className="icon"><img src="/button/mail.svg" alt="" /></div>
        </form>
      </div>
    </div>
  );
};
