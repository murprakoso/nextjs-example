import { IParams } from "./page";

export function ProductDetail({ params }: IParams) {
  console.log("ProductDetail: ", params);
  return (
    <div>
      <h1>ProductDetail : Product {params.productId}</h1>
    </div>
  );
}
