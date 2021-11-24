import { Helmet } from "react-helmet";
import ProductCardOne from "../components/productCard/ProductCardOne";
import ProductCardTwo from "../components/productCard/ProductCardTwo";

import CauroselSection from "../sections/cauroselSection";
import CollectionSection from "../sections/collectionSection";
import ProductsShowcaseSection from "../sections/productShowcaseSection";
import SellingFeatureSection from "../sections/sellingFeatureSection";

function Home({ match }) {
  return (
    <>
      <Helmet>
        <title>{match.params.title}</title>
        <meta name="author" content="Riyad Munauwar" />
      </Helmet>
      <CauroselSection variant="wide" />
      <CollectionSection />

      <SellingFeatureSection />

      <ProductsShowcaseSection
        col="col-lg-6"
        title="Best selling"
        category="Microsoft"
        component={ProductCardTwo}
      />

      <ProductsShowcaseSection category="Apple" component={ProductCardOne} />
    </>
  );
}

export default Home;
