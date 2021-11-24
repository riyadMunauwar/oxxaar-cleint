import { Typography, Badge, Image } from "antd";
import shampo from "../../static/shampo.png";
const { Text, Title, Link } = Typography;

function ProductCardTwo() {
  return (
    <div className="bg-white">
      <Badge.Ribbon text="Tk 250">
        <div>
          <div>
            <Image className="img-fluid" src={shampo} alt="" />
          </div>
          <div className="p-3">
            <div className="text-center">
              <Title level={5}>Shampu</Title>
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  );
}

export default ProductCardTwo;
