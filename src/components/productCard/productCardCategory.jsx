import { Link } from "react-router-dom";

function ProductCardCategory({ name, photo }) {
  return (
    <div className="product p-3 bg-white">
      {/* <div className="d-flex justify-content-center">
        <img src={photo} alt={name} className="w-50 mb-2" />
      </div> */}
      <div className="text-center">
        <Link to={`/collection/${name.trim().toLowerCase()}`}>{name}</Link>
      </div>
    </div>
  );
}

export default ProductCardCategory;
