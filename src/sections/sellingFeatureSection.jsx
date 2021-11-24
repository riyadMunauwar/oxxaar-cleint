import { Typography } from "antd";
import {
  SyncOutlined,
  RocketOutlined,
  CreditCardOutlined,
  WechatOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const iconStyle = {
  fontSize: "2.5rem",
  color: "#f9cd28",
  marginRight: "1.5rem",
};

function SellingFeatureSection() {
  return (
    <div className="container p-4 bg-white mt-5">
      <div className="row">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <RocketOutlined style={iconStyle} />
            <div className="">
              <Title className="" type="primary" level={4}>
                Fast Delivery
              </Title>
              <Text type="secondary">For orders over 10000TK</Text>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <SyncOutlined style={iconStyle} />
            <div>
              <Title className="" type="primary" level={4}>
                3 Days Return
              </Title>
              <Text type="secondary">If goods have problems</Text>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <CreditCardOutlined style={iconStyle} />
            <div className="">
              <Title className="" type="primary" level={4}>
                Secure Payment
              </Title>
              <Text type="secondary">100% secure payment</Text>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <WechatOutlined style={iconStyle} />
            <div className="">
              <Title className="" type="primary" level={4}>
                10am-6pm Support
              </Title>
              <Text type="secondary">Dedicated support</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingFeatureSection;
