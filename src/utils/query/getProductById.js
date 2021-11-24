export default function getProductById(products, productId) {
  if (Array.isArray(products) && typeof productId === "string") {
    return products.find((product) => product._id === productId);
  }
  return false;
}
