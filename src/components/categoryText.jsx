import Slider from "react-slick";
import { Typography } from "antd";

const { Link } = Typography;
function CategoryText() {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="text-caurosel py-2 border mb-3">
      <div className="container">
        <Slider {...settings}>
          <div>
            <Link>All</Link>
          </div>

          <div>
            <Link>Women</Link>
          </div>

          <div>
            <Link>Men</Link>
          </div>

          <div>
            <Link>Accessories</Link>
          </div>

          <div>
            <Link>Gadget</Link>
          </div>

          <div>
            <Link>Electronics</Link>
          </div>

          <div>
            <Link>Import</Link>
          </div>

          <div>
            <Link>Recent</Link>
          </div>

          <div>
            <Link>Special</Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CategoryText;
