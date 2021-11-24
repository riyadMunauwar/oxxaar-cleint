import Slider from "react-slick";
import { Typography } from "antd";
import ProductStyleCat from "./productCard/productCardCategory";

const { Title } = Typography;

function CatSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <div className="container pt-3 mb-3">
        <div>
          <Title level={5}>Collection</Title>
        </div>
        <Slider {...settings}>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
          <div>
            <ProductStyleCat />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CatSlider;
