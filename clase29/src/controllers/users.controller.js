// export const getUsers= async (req,res)=>{
// res.send({status:"success", result:"getUsers"})
// } 
// export const getUserById= async (req,res)=>{
// res.send({status:"success", result:"getUserByID"})
// } 
// export const saveUser= async (req,res)=>{
// res.send({status:"success", result:"saveUser"})
// } 

import User from '../dao/Classes/users.dao.js'
//import User from '../dao/MYSQL/Classes/users.dao.js'

const userService = new User();
export const getUsers = async (req, res) => {
  const users = await userService.getUser();//revision
  res.send({ status: "success", result: users });
};
export const getUserById = async (req, res) => {
  const { uid } = req.params;
  const user = await userService.getUserById(uid);

  res.send({ status: "success", result: user });
};
export const saveUser = async (req, res) => {
  let user = req.body;
  const result = await userService.saveUser(user);
  res.send({ status: "success", result });
};
export const updateUser = async (req, res) => {
  res.send({ status: "success", result: "updateUser" });
};
