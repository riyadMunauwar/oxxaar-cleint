import { useState } from "react";
import { Image, Typography, Badge, Button } from "antd";
import AddToCart from "../common/addToCart";
import AddToWishList from "../common/addToWishList";

const { Title, Text, Paragraph, Link } = Typography;

const GalleryPhoto = ({ src, ...rest }) => {
  return (
    <div className="m-1">
      <img {...rest} src={src}></img>
    </div>
  );
};

function ProductDetailsOne({ item }) {
  const [thumbnail, setThumbnail] = useState(item?.photo ?? "");

  const onImageClick = function (e) {
    setThumbnail(e.target.src);
  };
  return (
    <>
      <div className="container bg-white py-3 my-3">
        <div className="row">
          <div className="col-md-4">
            <div>
              <Badge.Ribbon text="40%">
                <Image
                  className="rounded"
                  // width={400}
                  height={400}
                  src={thumbnail}
                />
              </Badge.Ribbon>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              {item.gallery.map((photo, index) => (
                <GalleryPhoto
                  key={index}
                  className="rounded"
                  onClick={onImageClick}
                  height={60}
                  width={60}
                  alt={photo}
                  src={photo}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1">
            <div>
              <div>
                <Title level={4} type="">
                  {item.name}
                </Title>
              </div>
              <div>
                <Text>{item.code}</Text>
              </div>
              <div className="d-flex mt-4 justify-content-between align-items-center">
                <Title className="d-block" level={3} type="danger">
                  {item.price}
                </Title>
                <Text
                  className="d-block ml-3"
                  level={4}
                  delete
                  type="secondary"
                >
                  {item.regularPrice}
                </Text>
              </div>
              <div>
                <Text type="success">{item.countInStock}</Text>
              </div>
              <div className="mb-3">
                <Text style={{ fontSize: ".8rem" }}>
                  Only {item.countInStock} left
                </Text>
              </div>
              <div>
                <Paragraph>{item.shortDescription}</Paragraph>
              </div>
              <div className="w-50 mb-4 d-flex justify-content-between">
                <Button type="primary">-</Button>
                <Text>Quantity 5</Text>
                <Button type="primary">+</Button>
              </div>
              <div className="mb-3">
                <AddToCart productId={item._id} />
                <AddToWishList productId={item._id} />
              </div>
              <div>
                <Text>
                  Categories:{" "}
                  {item.category.map((item, index) => (
                    <Link key={index} to={`/collection/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  ))}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsOne;
