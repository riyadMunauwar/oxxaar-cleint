import { useState } from "react";
import {
  Form,
  Input,
  Typography,
  Button,
  Checkbox,
  Divider,
  Modal,
  Result,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoginWithProvider from "./loginWithProvider";
import {
  signUpWithEmailPassword,
  signUpWithGoogle,
  signUpWithFacebook,
} from "../../store/auth";

const { Title, Text } = Typography;

function SignUpBox() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.auth);

  const onSubmitForm = async ({ email, password, confirm }) => {
    if (password === confirm) {
      dispatch(
        signUpWithEmailPassword(email, password, () => setIsVisible(true))
      );
    }
  };

  const signUpWithGoogleHandeler = () => {
    dispatch(signUpWithGoogle());
  };

  const signUpWithFacebookHandeler = () => {
    dispatch(signUpWithFacebook());
  };

  return (
    <>
      <Modal footer={null} title="Result" visible={isVisible}>
        <Result
          status="success"
          title="Account Create Successfully"
          subTitle="Riyad Munauwar"
          extra={[
            <Button
              onClick={() => history.push("/")}
              type="primary"
              key="console"
            >
              Go To Home
            </Button>,
          ]}
        />
      </Modal>
      <div className="bg-white p-3  p-md-5">
        <Title className="text-center" level={5}>
          Signup
        </Title>
        <Form layout="vertical" onFinish={onSubmitForm}>
          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[{ required: true, type: "email" }]}
          >
            <Input type="email" placeholder="email"></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true }, { min: 8 }]}
          >
            <Input.Password
              type="password"
              placeholder="Password"
              hasFeedback
            ></Input.Password>
          </Form.Item>
          <Form.Item
            label="Confirm"
            name="confirm"
            hasFeedback
            dependencies={["password"]}
            rules={[
              { required: true },
              ({ getFieldValue }) => {
                return {
                  validator(_, value) {
                    const password = getFieldValue("password");
                    if (
                      value &&
                      password.length === value.length &&
                      password === value
                    )
                      return Promise.resolve();
                    return Promise.reject("Password not match !");
                  },
                };
              },
            ]}
          >
            <Input.Password placeholder="Confirm"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Checkbox />I Agree <Link to="/term">Term and Condition</Link>
          </Form.Item>
          <Form.Item>
            <div className="text-center mb-3">
              <Button loading={loading} htmlType="submit" type="primary">
                Signup
              </Button>
            </div>
            <Divider plain={true}>OR</Divider>
          </Form.Item>
          <LoginWithProvider
            block
            size="large"
            icon={<GoogleOutlined twoToneColor="#52c41a" />}
            onClick={signUpWithGoogleHandeler}
          >
            continue with Google
          </LoginWithProvider>
          <LoginWithProvider
            block
            size="large"
            icon={<FacebookOutlined twoToneColor="#52c41a" />}
            onClick={signUpWithFacebookHandeler}
            style={{ backgroundColor: "#3b5998", color: "#fff" }}
          >
            continue with facebook
          </LoginWithProvider>
          <Form.Item>
            <Text>
              Already Have and Account ? <Link to="/loign">Login</Link>
            </Text>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default SignUpBox;
