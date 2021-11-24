import _isObject from "./_isObject";

export default function cartSchema(data) {
  const schema = {
    productId: "",
    name: "",
    photo: "",
    countInStock: 0,
    price: 0,
    qty: 0,
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }
}
