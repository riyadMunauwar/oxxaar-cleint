const invoke = (callback) => {
  if (callback && typeof callback === "function") callback();
};

export default invoke;
