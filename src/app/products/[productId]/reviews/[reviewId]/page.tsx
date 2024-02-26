interface IParams {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetail = ({ params }: IParams) => {
  return (
    <div>
      <h1>ReviewDetail</h1>
        <p>Product {params.productId}</p>
        <p>Review {params.reviewId}</p>
    </div>
  );
};

export default ReviewDetail;
