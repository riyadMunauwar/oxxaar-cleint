import _isObject from "./_isObject";

const categorySchema = function (data) {
  const schema = {
    name: "",
    slug: "",
    photo: "",
    softDelete: false,
    shortDescription: "",
    description: "",
    parentId: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }

  return schema;
};

export default categorySchema;
