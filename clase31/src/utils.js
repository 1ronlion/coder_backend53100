import {fakerDE as faker } from "@faker-js/faker";

export const generateUser = () => {
  let numOfProducts = parseInt(faker.string.numeric());
  let products = [];
  for (let i = 0; i < numOfProducts; i++) {
    products.push(createProduct());
  }

  return {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sex(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.image.avatarLegacy(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  };
};

export  const createProduct = ()=>{
    return {
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      id: faker.database.mongodbObjectId(),
    };
}