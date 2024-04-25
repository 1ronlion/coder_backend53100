import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 4001;

// Middleware para manejar las políticas
function handlePolicies(policies) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token && !policies.includes("PUBLIC")) {
      return res.status(401).json({ message: "No token provided" });
    }
    if (policies[0] === "PUBLIC") return next();
    jwt.verify(token.split(" ")[1], "secret", (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }
      const userRole = decoded.role;

      if (!policies.includes(userRole)) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }
      req.user=decoded
      next()
    });
  };
}
// Endpoint para login (simulado)
app.post("/login", (req, res) => {
  const user = { username: "user1", role: "USER" };
  const token = jwt.sign(user, "secret", { expiresIn: "1h" });
  res.json({ token });
});
// Middleware para el router de usuario
app.use('/user', handlePolicies(['USER']))
// Endpoint protegido por políticas de usuario
app.get("/user/protected", (req, res) => {
  res.json({ message: "This is a protected endpoint for users" });
});
// Endpoint público
app.get("/public", handlePolicies(["PUBLIC"]), (req, res) => {
  res.json({ message: "This is a public endpoint" });
});
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
