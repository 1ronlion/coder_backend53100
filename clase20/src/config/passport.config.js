import passport from "passport";
import local from "passport-local";
import userService from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;

        try {
          const user = await userService.findOne({ email: username });
          if (user) {
            console.log("el usuario ya existe");
            return done(null, false); // Indica que el usuario existe (sin error)
          }

          const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password), // Hashear la contraseña
          };

          // Guardar el usuario
          const result = await userService.create(newUser);
          return done(null, result); // Pasar el usuario creado al éxito
        } catch (error) {
          return done(error); // Pasar el error si hay alguno
        }
      }
    )
  );

  //estrategia local para despues
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userService.findOne({ email: username });
          if (!user) return done(null, false);
          const valid = isValidPassword(user, password);
          if (!valid) return done(null, false);

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  //Serializar y deserializar usuario

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await userService.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

export default initializePassport;
