import _isObject from "./_isObject";

export default function productSchema(data) {
  const schema = {
    name: "",
    slug: "",
    photo: "",
    gallery: [],
    brand: "",
    category: [],
    tags: [],
    variants: [{}],
    seo: [{}],
    shortDescription: "",
    description: "",
    shippingCharge: 0,
    price: 0,
    regularPrice: 0,
    countInStock: 0,
    // reviews: [],
    // likes: [],
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
}

export const variantSchema = function (data) {
  const schema = {
    price: "",
    regularPrice: "",
    color: "",
    size: "",
    photo: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
};

export const seoSchema = function (data) {
  const schema = {
    title: "",
    metas: [{}],
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
};

export const metaSchema = function (data) {
  const schema = {
    name: "",
    content: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
};
