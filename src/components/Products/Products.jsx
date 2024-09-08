import { useEffect, useState, useRef } from "react";
import { Button } from "../Shared/Button/Button";
import "./style.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(1);

  const productCardContainerRef = useRef(null);

  const scrollPrev = () => {
    if (productCardContainerRef.current) {
      productCardContainerRef.current.scrollLeft -= 1000;
    }
  };
  
  const scrollNext = () => {
    if (productCardContainerRef.current) {
      productCardContainerRef.current.scrollLeft += 1000;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openverse.org/v1/images/?format=json&q=furniture"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="products">
      <div className="products_section">
        <div className="head">
          <div className="title_24">OUR PRODUCTS</div>
          <div className="title_48">This month’s best seller</div>
        </div>
        <div className="btn title_16">
          <Button bg="var(--color-sour)" p="0.875rem 2.25rem">
            SEE MORE
          </Button>
        </div>
      </div>
      <div className="product_images" ref={productCardContainerRef}>
        {products["results"].map((product, index) => (
          <div
            className="product_card"
            key={index.toString()}
            style={{
              backgroundImage: `url("${product.url}")`,
              width: "18.75rem",
              height: "25rem",
            }}
            onMouseEnter={() => setIsActive(index)}
            onMouseLeave={() => setIsActive(index)}
          >
            {isActive === index ? (
              <>
                <div className="price_tag title_24">
                  $ {Math.floor(Math.random() * 1000)}
                </div>
                <div className="product_name description_48">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className="scroll-button-container">
          <Button bg="var(--color-sour)" p="1rem" radius="50%" onClick={() => scrollPrev()}>
          <img src="/button/arrow_back_ios.svg" alt="" />
          </Button>
          <Button bg="var(--color-sour)" p="1rem" radius="50%" onClick={() => scrollNext()}>
          <img src="/button/arrow_forward_ios.svg" alt="" />
          </Button>
        </div>
    </div>
  );
};
