import { Table, Space, Button, Avatar, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  cartIncreamentQty,
  cartDecreamentQty,
  removeCartItem,
} from "../store/cart";

function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const increamentQtyHandeler = (productId) => {
    dispatch(cartIncreamentQty(productId));
  };

  const decreamentQtyHandeler = (productId) => {
    dispatch(cartDecreamentQty(productId));
  };

  const removeCartItemHandeler = (productId) => {
    dispatch(removeCartItem(productId));
  };

  const columns = [
    {
      title: "Product image",
      dataIndex: "photo",
      key: "photo",
      render: (photo) => <Avatar src={photo}></Avatar>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Qty",
      key: "qty",
      dataIndex: "qty",
      render: (qty, record) => (
        <>
          <Space>
            <Button onClick={() => decreamentQtyHandeler(record.productId)}>
              -
            </Button>
            <div>{qty}</div>
            <Button onClick={() => increamentQtyHandeler(record.productId)}>
              +
            </Button>
          </Space>
        </>
      ),
    },
    {
      title: "Total Price",
      key: "total",
      render: (text, record) => {
        return <div>{record.price * record.qty}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to remove this item from cart ?"
            onConfirm={() => removeCartItemHandeler(record.productId)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Remove</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Table columns={columns} dataSource={items} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
