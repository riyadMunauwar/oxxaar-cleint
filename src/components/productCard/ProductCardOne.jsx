import { Typography, Rate, Badge } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import AddToCart from "../common/addToCart";
import AddToWishList from "../common/addToWishList";
const { Title, Link, Text } = Typography;

function ProductCardOne({ item }) {
  const history = useHistory();
  const goToHandeler = () => {
    history.push(`/product/${item.slug}/${item._id}`);
  };
  return (
    <div className="mb-4">
      <Badge.Ribbon text="80% Off">
        <div className="product border">
          <div className="product-header"></div>
          <div onClick={goToHandeler} className="productbody">
            <img
              className="img-fluid rounded"
              src={item.photo}
              alt={item.name}
            />
          </div>
          <div onClick={goToHandeler} className="product-footer p-3">
            <Link>
              <Title type="danger" level={5}>
                {item.name}
              </Title>
              <div className="mb-2">
                <Link strong>Tk 200</Link>
              </div>
              <Text delete> Tk 250</Text>
            </Link>
            <div className="mb-3">
              <Rate allowHalf defaultValue={4}></Rate>
            </div>
            <div className="d-flex justify-content-between">
              <AddToCart productId={item._id} Icon={ShoppingCartOutlined} />
              <AddToWishList productId={item._id} Icon={HeartOutlined} />
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  );
}

export default ProductCardOne;
