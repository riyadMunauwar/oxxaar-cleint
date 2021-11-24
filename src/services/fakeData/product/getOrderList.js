import faker from "faker";

function getSingleOrder() {
  return {
    _id: faker.time.recent(),
    items: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    totalPrcie: faker.commerce.price(),
    paymentStatus: "processing",
    paymentMethod: "cash on",
    address: {
      country: faker.address.country(),
      zipcode: faker.address.zipCode(),
      city: faker.address.city(),
    },
  };
}

export default function getOrderList(limit) {
  const orders = [];

  for (let i = 0; i < limit; i++) {
    orders.push(getSingleOrder());
  }

  return orders;
}
