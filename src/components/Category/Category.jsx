import "./style.css";
import { useState } from "react";

export const Category = () => {
  const [categories, setCategories] = useState([
    {
      title: "Bedroom",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: false,
    },
    {
      title: "Living Room",
      description: "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability",
      isActive: true,
    },
    {
      title: "Home Office",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: false,
    },
    {
      title: "Gaming Room",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: false,
    },
  ]);

  const handleActive = (index) => {
    setCategories(
      categories.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isActive: true,
          };
        }
        return {
          ...item,
          isActive: false,
        };
      })
    );
  };

  return (
    <div className="category">
      <div className="left">
        <img src="/images/cat1.png" alt="" />
        <img src="/images/cat2.png" alt="" />
        <img src="/images/cat3.png" alt="" />
      </div>
      <div className="right">
        <div id="label" className="title_24">
          Categories
        </div>
        <div id="title" className="title_48">
          Furniture Sets Recommendations
        </div>
        <div className="cat">
          {categories.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              onClick={() => handleActive(index)}
              style={{
                backgroundColor: item.isActive ? "var(--color-sour)" : "",
                padding: item.isActive ? "1.25rem 1.5rem" : "1.25rem 1rem",
              }}
            >
              <div className="title_18">{item.title}</div>
              {item.isActive && (
                <div className="description_14">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
