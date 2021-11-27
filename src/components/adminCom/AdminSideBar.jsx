import { Menu } from "antd";
import { useHistory } from "react-router";

const AdminSidebar = () => {
  const history = useHistory();
  const handleClick = ({ key }) => {
    history.push(`/admin/${key}`);
  };
  return (
    <Menu onClick={handleClick} mode="inline">
      <Menu.Item key="category">Category</Menu.Item>

      <Menu.SubMenu key="sub1" title="Products">
        <Menu.Item key="add-new">Add Product</Menu.Item>
        <Menu.Item key="all-product">All product</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="orders">Order</Menu.Item>
      <Menu.Item key="slider">Slider</Menu.Item>
    </Menu>
  );
};

export default AdminSidebar;
