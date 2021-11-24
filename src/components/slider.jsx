import { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCauroselFromDatabase } from "../store/caurosel";

function Slider({ variant = "container" }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.caurosel);

  useEffect(() => {
    dispatch(getCauroselFromDatabase());
  }, [dispatch, items]);
  return (
    <div className={`${variant} mb-5`}>
      <Carousel autoplay dotPosition="left">
        {items.map((item) => (
          <img key={item._id} src={item.photo} alt={item.name} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
