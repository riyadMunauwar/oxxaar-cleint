import { Divider, Image, Typography } from "antd";
const { Title, Text } = Typography;

const ProductCardThree = ({ item }) => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Image></Image>
        </div>
        <div className="col-8">
          <Title level={5}> {item.name} </Title>
        </div>
      </div>
    </div>
  );
};
