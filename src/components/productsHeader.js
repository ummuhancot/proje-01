import React from 'react'

const ProductsHeader = ({title}) => {
  return (
    <div className="m-3">
      <h1
        className="productsHeader"
        style={{
          backgroundColor: "rgba(82, 65, 161, 0.72)",
          textAlign: "center",
          padding: "20px",
          color: "white",
        }}
      >
        Welcome to the World of Cats {title}
      </h1>
    </div>
  );
}

export default ProductsHeader