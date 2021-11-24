import faker from "faker";

function getSingleCategory() {
  return {
    _id: faker.time.recent(),
    name: faker.commerce.department(),
    slug: faker.commerce.department().toLowerCase(),
    active: true,
    photo: faker.random.image(),
    description: faker.lorem.paragraphs(),
  };
}

function getCategoryList(limit) {
  const category = [];

  for (let i = 0; i < limit; i++) {
    category.push(getSingleCategory());
  }

  return category;
}

export default getCategoryList;
