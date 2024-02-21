import fs from 'fs';
import crypto from 'crypto'

const path = "./Usuarios.json"

export default class UserManager {

    getUsuarios = async() => {

        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8')
            const users = JSON.parse(data)

            return users
        }

        return []

    }

    crearUsuario = async(usuario) => {

        const usuarios = await this.getUsuarios()

        usuario.salt = crypto.randomBytes(128).toString('base64')

        usuario.contrasena = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex')

        usuarios.push(usuario)

        await fs.promises.writeFile(path, JSON.stringify(usuarios, null, '\t'))

        return usuario
    }

    validarUsuario = async(username, password) => {

        const usuarios = await this.getUsuarios()
        const usuarioIndex = usuarios.findIndex(u => u.nombre_usuario === username)

        if(usuarioIndex == -1){
            console.log("Usuario no encontrado")
        }

        const usuario = usuarios[usuarioIndex]
        const newHash = crypto.createHmac('sha256', usuario.salt).update(password).digest('hex')


        if(newHash === usuario.contrasena){

            console.log("Usuario loggeado con exito!!!")

        }else{

            console.log("Contraseña invalida")

        }

    }


}





