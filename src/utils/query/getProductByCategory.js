export default function getProductByCategory(products, category) {
  if (Array.isArray(products) && typeof category === "string") {
    return products.filter((product) => {
      const categoryList = product.category.map((item) => item.toLowerCase());

      if (categoryList.includes(category.toLowerCase())) return true;
      return false;
    });
  }
}
