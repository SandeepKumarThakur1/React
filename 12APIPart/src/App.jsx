import React, { useState } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/users";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products);

  return (
    <>
      <h1>How to integrate API in React JS</h1>
      <button
        onClick={() => getProducts()}
        className="py-2 px-3 bg-orange-700 my-4 rounded-md"
      >
        Click To Get Product
      </button>
      <hr />
      <div>
        <ul>
          {products.length > 0 ? (
            products.map((p, index) => {
              return (
                <li
                  className="bg-[#9f8c2b38] text-white p-4 rounded-md mt-3 flex justify-between items-center"
                  key={index}
                >
                  <div className="w-[85%]">
                    <h4 className="font-bold">
                      {p.title} - {p.category}
                    </h4>
                    <h4>Price - {p.price}</h4>
                    <p className="text-[13px]">{p.description}</p>
                  </div>
                  <div>
                    <img
                      src={p.image}
                      alt=""
                      className="w-16 h-16 rounded-full object-contain bg-white p-2"
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <h1 className="mt-3">Loading Products....</h1>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
