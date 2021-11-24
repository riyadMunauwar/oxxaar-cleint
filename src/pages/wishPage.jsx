import { Avatar, Space, Table, Popconfirm, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import AddToCart from "../components/productCard/addToCart";

export default function WishPage() {
  //   const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wish);

  const removeWishItemHandeler = (productId) => {
    alert(productId);
  };

  const columns = [
    {
      title: "Product image",
      dataIndex: "photo",
      key: "photo",
      render: (photo, recored) => <Avatar src={photo} />,
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "aciotn",
      render: (text, record) => {
        return (
          <Space>
            <AddToCart productId={record._id} />
            <Popconfirm
              title="Are you sure to remove this item from wishtlist ?"
              onConfirm={() => removeWishItemHandeler(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">Remove</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Table columns={columns} dataSource={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
