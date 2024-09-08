import { useEffect, useState } from "react";

// const getData = async () => {
//   const data = await fetch(
//     "https://fakestoreapi.com/products/category/jewelery"
//   );
//   const res = await data.json();
//   return res;
// };

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  );
};
