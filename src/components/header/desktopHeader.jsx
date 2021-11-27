import { Image, Avatar, Typography } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../store/auth";
import IconWithBadge from "./iconWithBadge";
import Search from "./search";
import classes from "./Header.module.css";
import Logo from "../../static/logo-oxaar.png";

const { Link } = Typography;

function DesktopHeader(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { items: wishItems } = useSelector((state) => state.wish);
  const { isLogin, userInfo } = useSelector((state) => state.auth);

  const onSignUpClick = () => {
    history.push("/signup");
  };

  const onLoginClick = () => {
    history.push("/login");
  };

  const goToProfileHandeler = () => {
    history.push("/profile");
  };

  const goToHomeHandeler = () => {
    history.push("/");
  };

  const onLogOutHandeler = async () => {
    dispatch(logOutUser());
  };

  return (
    <div className="desktop-header py-2 shadow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 mb-md-0">
            <Image
              style={{ cursor: "pointer" }}
              onClick={goToHomeHandeler}
              height={70}
              preview={false}
              src={Logo}
            />
          </div>
          <div className="col-md-5 mb-5 mb-md-0">
            <Search />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="row">
              <div className="col-5 d-flex align-items-center">
                <IconWithBadge
                  navigate="/cart"
                  className="flex-fill"
                  count={items.length}
                  iconSize="2rem"
                  Icon={ShoppingCartOutlined}
                />

                <IconWithBadge
                  navigate="/wish-list"
                  count={wishItems.length}
                  iconSize="2rem"
                  Icon={HeartOutlined}
                />
              </div>
              <div className="col-7 d-flex align-items-center">
                <div className={classes.menuItem}>
                  {!isLogin && <Link onClick={onSignUpClick}>Signup</Link>}
                </div>
                <div className={classes.menuItem}>
                  {!isLogin && <Link onClick={onLoginClick}>Login</Link>}
                </div>
                <div className={classes.menuItem}>
                  {isLogin && <Link onClick={onLogOutHandeler}>Logout</Link>}
                </div>
                <div onClick={goToProfileHandeler}>
                  {isLogin && <Avatar>RM</Avatar>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
