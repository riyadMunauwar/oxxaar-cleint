import getSingleProduct from "./getSingleProduct";

function getProductList(limit) {
  const list = [];
  for (let i = 0; i < limit; i++) list.push(getSingleProduct());

  return list;
}

export default getProductList;
