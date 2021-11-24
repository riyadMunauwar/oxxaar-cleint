const _isObject = (object) => {
  if (
    object &&
    typeof object === "object" &&
    object instanceof Object &&
    object.constructor === Object
  )
    return true;

  return false;
};

export default _isObject;
