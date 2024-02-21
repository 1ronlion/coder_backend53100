import fs from 'fs';

const PATH = './ejemplo.json'

const asyncTask = async () => {
    
    let data = await fs.promises.readFile(PATH, 'utf-8')

    let result = JSON.parse(data)
    console.log("🚀 ~ asyncTask ~ result:", result)

    result.name = "Rodrigo"

    let finalData = JSON.stringify(result)
    await fs.promises.writeFile(PATH, finalData)

}

asyncTask()
