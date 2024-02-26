interface IParams {
  params: {
    productId: string;
  };
}

const ProductDetail = ({ params }: IParams) => {
  console.log("ProductDetail: ", params);
  return (
    <div>
      <h1>ProductDetail : Product {params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
