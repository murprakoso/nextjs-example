import React from "react";

interface IChildren {
  children: React.ReactNode;
}

const ProductDetailsLayout = ({ children }: IChildren) => {
  return (
    <>
      <h2>Features product</h2>

      {children}
    </>
  );
};

export default ProductDetailsLayout;
