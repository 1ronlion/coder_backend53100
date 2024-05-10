// export const getOrders = async (req, res) => {
//   res.send({ status: "success", result: "getOrders" });
// };
// export const getOrderById = async (req, res) => {
//   res.send({ status: "success", result: "getOrderByID" });
// };
// export const saveOrder = async (req, res) => {
//   res.send({ status: "success", result: "saveOrder" });
// };
// export const resolveOrder = async (req, res) => {
//   res.send({ status: "success", result: "resolveOrder" });
// };


import User from '../dao/Classes/users.dao.js'
import Business from '../dao/Classes/business.dao.js'
import Order from '../dao/Classes/orders.dao.js'
const userService = new User();
const businessService = new Business();
const orderService = new Order();

export const getOrders = async (req, res) => {
  const result = await orderService.getOrder();
  res.send({ status: "success", result });
};

export const getOrderById = async (req, res) => {
  const { oid } = req.params;
  const order = await orderService.getOrderById(oid);
  res.send({ status: "success", result: order });
};

export const saveOrder = async (req, res) => {
  //traemos el usuario el negocio, y los productos
  const { user, business, products } = req.body;

  //buscamos el usuario, y el negocio
  const resultUser = await userService.getUserById(user);
  const resultBusiness = await businessService.getBusinessById(business);
  //filtramos los productos que tienen el negocio
  const actualOrders = resultBusiness.products.filter((product) =>
    products.includes(product.id)
  ); 
  //calcular precio total
  const sum = actualOrders.reduce((acc, prev) => (acc += prev.price), 0);
  //construimos la orden
  const orderNumber = Math.floor(Math.random() * 10000 + 1); 

  const order = {
    number: orderNumber,
    business,
    user,
    status: "pending",
    products: actualOrders.map((product) => product.id),
    totalPrice: sum,
  };
  //guardar la orden
  const orderResult = await orderService.createOrder(order);
  console.log(orderResult._id);
  //le asiganmos la orden al usuario
  resultUser.orders.push(orderResult._id);
  // //actualizamos el usuario
  await userService.updateUser(user, resultUser);
  //mostramos la orden
  res.send({ status: "success", result: orderResult });
};