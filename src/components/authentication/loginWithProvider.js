import { Form, Button } from "antd";

const LoginWithProvider = ({ children, ...rest }) => {
  return (
    <Form.Item>
      <Button {...rest}>{children}</Button>
    </Form.Item>
  );
};

export default LoginWithProvider;
