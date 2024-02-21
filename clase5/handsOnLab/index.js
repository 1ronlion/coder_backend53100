import UserManager from "./manager.js"

let manager = new UserManager()

let user = {
    nombre:'Gonzalo',
    apellido:'Fernandez',
    nombre_usuario:'gondev',
    contrasena:'123456'
}

// await manager.crearUsuario(user)

// await manager.getUsuarios()

await manager.validarUsuario("MomoRompe", "123456")