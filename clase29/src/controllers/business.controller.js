// export const getBusiness = async (req, res) => {
//   res.send({ status: "success", result: "getBusiness" });
// };
// export const getBusinessById = async (req, res) => {
//   res.send({ status: "success", result: "getBusinessByID" });
// };
// export const saveBusiness = async (req, res) => {
//   res.send({ status: "success", result: "saveBusiness" });
// };
// export const addProduct = async (req, res) => {
//   res.send({ status: "success", result: "addProduct" });
// };

import Business from "../dao/Classes/business.dao.js";

const businessService = new Business();

export const getBusiness = async (req, res) => {
  const result = await businessService.getBusiness();

  if (!result) res.status(500).send({ status: "error", error: "No existe" });

  res.send({ status: "success", result });
};
export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  const result = await businessService.getBusinessById(bid);
  if (!result)
    return res.status(500).send({
      status: "error",
      error: "Something went wrong, try again later",
    });
  res.status(200).send({ status: "success", result: result });
};
export const saveBusiness = async (req, res) => {
  const business = req.body;
  const result = await businessService.saveBusiness(business);
  if (!result)
    return res.status(500).send({
      status: "error",
      error: "Something went wrong, try again later",
    });
  res.send({ status: "success", result: result });
};
export const addProduct = async (req, res) => {
  const product = req.body;
  const business = await businessService.getBusinessById(req.params.bid);

  business.products.push(product);
  //actualizo
  const result = await businessService.updateBusiness(business._id, business);
  if (!result)
    return res.status(500).send({
      status: "error",
      error: "Something went wrong, try again later",
    });
  res.send({ status: "success", result: "Business updated" });
};
