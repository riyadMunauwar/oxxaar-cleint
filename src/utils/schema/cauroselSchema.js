import _isObject from "./_isObject";

const cauroselSchema = (data) => {
  const schema = {
    name: "",
    photo: "",
    link: "",
  };

  if (_isObject(data)) {
    return Object.assign(schema, data);
  }
};

export default cauroselSchema;
