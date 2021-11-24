import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../store/wish";

const AddToWishList = ({
  productId,
  Icon,
  color = "light",
  size = "1.5rem",
}) => {
  const dispatch = useDispatch();
  const addItemToWishList = () => {
    dispatch(addToWishList(productId));
  };

  return (
    <div onClick={addItemToWishList}>
      <Button type="danger">
        <Icon style={{ fontSize: size, color: color }} />
      </Button>
    </div>
  );
};

export default AddToWishList;
