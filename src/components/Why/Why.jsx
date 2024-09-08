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

export const Why = () => {
  return (
    <div className="why">
      <div className="why_section">
        <div className="title_24">WHY CHOOSE US?</div>
        <div className="title_64">
          We care about details and the quality of our products
        </div>
        <div className="experience">
          {items.map((item, index) => (
            <div className="item" key={index.toString()}>
              <img src={item.icon} alt="" />
              <p className="title_24bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="partner_section">
        <div className="number">
          <div className="num title_96">25+</div>
          <div className="title_24 partner ">PARTNERED BRANDS</div>
        </div>
        <div className="icons">
            {icons.map((icon, index) => (
              <img src={icon} alt="" key={index.toString()} />
            ))}
        </div>
      </div>
    </div>
  );
};
