import { Badge } from "antd";
import { useHistory } from "react-router";

function IconWithBadge({
  navigate = null,
  className,
  style,
  count,
  iconSize,
  Icon,
}) {
  const history = useHistory();

  const navigateTo = () => {
    if (navigate) {
      history.push(navigate);
    }
  };
  return (
    <div
      className={className && className}
      style={style && style}
      onClick={navigateTo}
      style={{ marginRight: "auto" }}
      className="d-flex "
    >
      <Badge count={count && count}>
        <Icon style={{ fontSize: iconSize ? iconSize : "1.5rem" }} />
      </Badge>
    </div>
  );
}

export default IconWithBadge;
