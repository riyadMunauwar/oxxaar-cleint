import ProductsShowcaseSection from "../sections/productShowcaseSection";
import ProductCardOne from "../components/productCard/ProductCardOne";

function CategoryPage({ match, history, location }) {
  const { category } = match.params;
  return (
    <ProductsShowcaseSection category={category} component={ProductCardOne} />
  );
}

export default CategoryPage;
