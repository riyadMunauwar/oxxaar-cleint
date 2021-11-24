import _isObject from "./_isObject";

export const itemSchema = function (data) {
  const schema = {
    name: "",
    price: 0,
    qty: 0,
    photo: "",
    productId: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }
};

export const paymentSchema = (data) => {
  const schema = {
    status: "",
    due: 0,
    paid: 0,
    method: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }
};

export const shippingSchema = (data) => {
  const schema = {
    fullName: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    postCode: "",
    zipCode: "",
    adress: "",
  };

  if (_isObject(data)) return Object.assign(schema, data);
};

export const orderSchema = function (data) {
  const schema = {
    shippingInfo: {},
    items: [{}],
    paymentInfo: {},
    userId: "",
    itemsPrice: 0,
    texPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    orderStatus: "processing",
    paidAt: Date,
    deliverdAt: Date,
    createAt: Date,
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
};

export default orderSchema;
