import faker, { git } from "faker";
import getRandomNumber from "./getRandomNumber";

function getSingleProduct() {
  return {
    _id: faker.git.commitSha(),
    name: faker.commerce.productName(),
    slug: getSlug(faker.commerce.productName()),
    photo: faker.image.fashion(),
    // gallery: getGallery(getRandomNumber(6)),
    gallery: faker.image.sports(),
    price: faker.commerce.price(),
    regularPrice: faker.commerce.price(),
    brand: faker.company.companyName(),
    // category: getCategory(getRandomNumber(5)),
    category: faker.commerce.department(),
    description: faker.lorem.paragraphs(),
    seo: {
      title: faker.commerce.productName(),
      // metas: getMetaData(getRandomNumber(6)),
    },
    // variant: getVariantList(getRandomNumber()),
  };
}

export default getSingleProduct;

function getSlug(name) {
  return name.trim().toLowerCase().replaceAll(" ", "-");
}
