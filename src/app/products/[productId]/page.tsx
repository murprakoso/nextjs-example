import { Metadata } from "next";

interface IParams {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
    description: "ProductDetail page",
  };
};

const ProductDetail = ({ params }: IParams) => {
  return (
    <div>
      <h1>ProductDetail : Product {params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
