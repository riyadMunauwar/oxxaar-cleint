import { useState, useEffect } from "react";
import { Typography, Empty, Button, Pagination, Spin } from "antd";
import { useSelector } from "react-redux";
import getProductByCategory from "../utils/query/getProductByCategory";

function ProductsShowcaseSection({
  title = null,
  gutter = "g-2",
  col = "col-lg-3",
  margin = "mt-5",
  component: Component,
  category = null,
}) {
  const { items } = useSelector((state) => state.products);
  const [totalFoundItemByCategory, setTotalFoundItemByCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [pageSize, setPageSize] = useState(2);
  const [loading, setLoading] = useState(true);

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;

  let showItems = totalFoundItemByCategory.slice(firstIndex, lastIndex);

  useEffect(() => {
    setTotalFoundItemByCategory(getProductByCategory(items, category));
    setTotalPage(totalFoundItemByCategory.length);
    setLoading(false);
  }, [items]);

  const onChangeHandeler = (value) => {
    setCurrentPage(value);
  };

  const onShowSizeChangeHandeler = (current, pageSize) => {
    setPageSize(pageSize);
  };

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <Button type="danger">Prev</Button>;
    }
    if (type === "next") {
      return <Button type="danger">Next</Button>;
    }
    return originalElement;
  }

  if (!category) return <Empty />;

  return (
    <div className={`${margin}`}>
      <div className="container">
        <Typography.Title className="mb-1" level={4}>
          {title ? title : category}
        </Typography.Title>
        <Button className="mb-3" type="primary">
          {category}
        </Button>

        <div className={`row ${gutter}`}>
          {loading ? (
            Spin
          ) : showItems.length !== 0 ? (
            showItems.map((product) => (
              <div className={`${col}`} key={product._id}>
                <Component item={product} />
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalPage}
          itemRender={itemRender}
          onChange={onChangeHandeler}
          pageSizeOptions={[2, 4, 6, 8, 10, 15, 20, 25, 30, 40, 50, 100]}
          showSizeChanger
          onShowSizeChange={onShowSizeChangeHandeler}
        />
      </div>
    </div>
  );
}

export default ProductsShowcaseSection;
