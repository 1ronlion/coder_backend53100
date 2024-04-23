import passport from "passport";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const ExtracJWT = jwt.ExtractJwt;
const initializePassport = () => {
  //Estrategia para jwt
  

  //función que extrae las cookies
  const cookieExtractor = (req) => {
    //lógica a implementar
  };
};
export default initializePassport;
