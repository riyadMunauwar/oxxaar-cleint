import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { cartAddItem } from "../../store/cart";

const AddToCart = ({ Icon = ShoppingCartOutlined, productId, qty = 1 }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(cartAddItem(productId, qty));
  };
  return (
    <div onClick={addItemToCart}>
      <Button type="primary" icon={<Icon />}>
        Add To Curt
      </Button>
    </div>
  );
};

export default AddToCart;
