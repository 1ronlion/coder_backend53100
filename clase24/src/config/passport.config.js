import passport from "passport";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const ExtracJWT = jwt.ExtractJwt;
const initializePassport = () => {
  //función que extrae las cookies
  const cookieExtractor = (req) => {
    //lógica a implementar

    let token = null;
    if (req && req.cookies) {
      token = req.cookies["practica-integradora"];
    }
    return token;
  };
  //Estrategia para jwt
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtracJWT.fromExtractors([cookieExtractor]),
        secretOrKey: "practica-integradora",
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
export default initializePassport;
