import { useState } from "react";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { Pagination, Button } from "antd";
import ProductCardOne from "../components/productCard/ProductCardOne";
import fuzzySearch from "../utils/fuzzySearch";

function ResultPage({ match, history, location }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const { items } = useSelector((state) => state.products);
  const { search_query } = queryString.parse(location.search);

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

  if (search_query) {
    const showResult = fuzzySearch(items, search_query) || [];

    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            {showResult.map((item, index) => (
              <div key={index} className="col-md-4">
                <ProductCardOne item={item.item} />
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={showResult.length}
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

  return (
    <div>
      <div>Total Product {items.length}</div>
    </div>
  );
}

export default ResultPage;
