import fs from 'fs'
import { Blob } from 'buffer' 

const PATH = "./package.json"
const INFO = "./info.json"

const handleData = async () => {

  let data = await fs.promises.readFile(PATH, 'utf-8')

  let contenidoString = data
  let contenidoObj = JSON.parse(data)
  let size = new Blob([data]).size

  const info = {
    contenidoString,
    contenidoObj,
    size
}

   await fs.promises.writeFile(INFO, JSON.stringify(info, null, '\t'))

}

handleData()