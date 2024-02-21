import fs from 'fs'

const PATH = "./Usuarios.json"


class ManagerUsuarios {

    consultarUsuarios = async() => {

        const data = await fs.promises.readFile(PATH, 'utf-8')
        const users = JSON.parse(data)

        return users
    }

    crearUsuario = async(usuario) => {

        usuario.id = 0
        const users = await this.consultarUsuarios()

        if(users.length === 0){
            usuario.id = 1 
        }else{
            usuario.id = users[users.length-1].id+1
        }

        users.push(usuario)

        await fs.promises.writeFile(PATH, JSON.stringify(users, null, "\t"))
        return usuario

    }
}

const Usuarios = new ManagerUsuarios()

let user = {
    nombre: "Emiliano",
    apellido: "Alfonsin",
    edad: 40,
    curso: "Backend"
}

await Usuarios.crearUsuario(user)


