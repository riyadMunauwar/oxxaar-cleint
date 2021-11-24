import { useSelector } from "react-redux";
import getProductById from "../utils/query/getProductById";
import ProductDetailsOne from "../components/productDetails/productDetailsOne";
import ProductDescription from "../components/productDetails/productDescription";

function ProductDetailsPage({ match, location, history }) {
  const { productId } = match.params;
  const { items } = useSelector((state) => state.products);

  const product = getProductById(items, productId);
  return (
    <div>
      <ProductDetailsOne item={product} />
      <ProductDescription />
    </div>
  );
}

export default ProductDetailsPage;
