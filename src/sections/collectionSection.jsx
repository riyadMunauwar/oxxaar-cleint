import { Typography, Spin, Empty } from "antd";
import { useSelector } from "react-redux";
import ProductStyleCat from "../components/productCard/productCardCategory";

const { Title } = Typography;

const CollectionSection = () => {
  const { items, loading, error } = useSelector((state) => state.categories);

  let cat = items.map((category, index) => {
    return (
      <div key={index} className="col-md-2 col-4">
        <ProductStyleCat name={category.name} photo={category.photo} />
      </div>
    );
  });

  const spin = <Spin size="large"></Spin>;

  return (
    <div className="mt-5">
      <div className="container">
        <div>
          <Title level={5}>Categories</Title>
        </div>
        <div className="row g-1">{loading ? spin : cat || <Empty />}</div>
      </div>
    </div>
  );
};

export default CollectionSection;
