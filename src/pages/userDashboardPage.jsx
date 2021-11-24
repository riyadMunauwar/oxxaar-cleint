import { Image, Menu, Typography, Table } from "antd";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const { Title } = Typography;

const UserDashboardPage = () => {
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = ({ key }) => {
    history.push(`/profile/${key}`);
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "name",
      key: "photo",
      render: (photo) => <Image width={100} height={100} src={photo ?? ""} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      photo: "",
      status: "processing",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      photo: "",
      name: "Jim Green",
      status: "processing",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      photo: "",
      name: "Joe Black",
      status: "processing",
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      photo: "",
      name: "Disabled User",
      status: "processing",
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return (
    <>
      <div className="mt-3">
        <div className="container bg-white p-4">
          <div className="d-flex">
            <Image
              width={150}
              height={150}
              placeholder
              src={userInfo?.user?.photoURL ?? ""}
            ></Image>
            <div className="ms-3">
              <Title>{userInfo?.user?.displayName ?? "John Doe"}</Title>
              <Title level={5}>{userInfo?.user?.email ?? ""}</Title>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu onClick={handleClick} mode="inline">
                <Menu.Item key="order">Order</Menu.Item>
                <Menu.Item key="history">History</Menu.Item>
                <Menu.Item key="settings">settings</Menu.Item>
              </Menu>
            </div>

            <div className="col-md-9">
              <Switch>
                <Route path="/profile/order">
                  <Table columns={columns} dataSource={data} />
                </Route>
                <Route path="/profile/history">
                  <div>history</div>
                </Route>
                <Route path="/profile/settings">
                  <div>settings</div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
