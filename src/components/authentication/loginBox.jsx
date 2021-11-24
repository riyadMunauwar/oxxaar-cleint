import { Form, Input, Button, Checkbox, Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import LoginWithProvider from "./loginWithProvider";
import {
  loginWithEmailPassword,
  signUpWithGoogle,
  signUpWithFacebook,
} from "../../store/auth";

const { Text } = Typography;

function LoginBox() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.auth);

  const loginHandeler = async ({ email, password }) => {
    dispatch(loginWithEmailPassword(email, password, () => history.push("/")));
  };

  const signUpWithGoogleHandeler = () => {
    dispatch(signUpWithGoogle());
  };

  const signUpWithFacebookHandeler = () => {
    dispatch(signUpWithFacebook());
  };

  return (
    <>
      <div className="bg-white p-3 p-md-5">
        <Typography.Title className="text-center" level={5}>
          Login
        </Typography.Title>
        <Form layout="vertical" onFinish={loginHandeler}>
          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                type: "email",
                message: "Please provide your email",
              },
            ]}
          >
            <Input placeholder="email"></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true }, { min: 8 }]}
          >
            <Input.Password placeholder="password"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember</Checkbox>
          </Form.Item>
          <Form.Item className="text-center">
            <Button loading={loading} htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
          <Divider plain={true}>OR</Divider>

          <LoginWithProvider
            block
            size="large"
            icon={<GoogleOutlined twoToneColor="#52c41a" />}
            onClick={signUpWithGoogleHandeler}
            // style={{ backgroundColor: "#3b5998", color: "#fff" }}
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
              <Link to="/forget-password">Forgot Password ?</Link>
            </Text>
          </Form.Item>
          <Form.Item>
            <Text>
              Don't have an account ? <Link to="/singup"> Create one </Link>
            </Text>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default LoginBox;
