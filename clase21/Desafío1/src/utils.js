import jwt from "jsonwebtoken";

const PRIVATE_KEY = "CoderKeyFeliz";

export const generateToken = (user) => {
  //lógica para generar el token
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: "1h" });
  return token
};

export const authToken = (req, res, next) => {
  //lógica de autorización
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ status: "error", message: "No autorizado" });
  console.log(authHeader);
  const token = authHeader.split(" ")[1];

  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    console.log(error);
    if (error)
      return res
        .status(401)
        .send({ status: "error", message: "No autorizado" });
    req.user = credentials.user;
    next();
  });
};
