// function getName(){

//     this.name
//     console.log("🚀 ~ getName ~ this.name:", this.name)

// }

// globalThis.name = "Leo"

// getName()//"Leo"

// let functions = {

//     name: "Jorge",
//     getName: getName

// }

// functions.getName()//Jorge





class Names {
    constructor(name){

        this.name = name || "Default"

    }

    getName = () =>{

        let name = this.name
        console.log("🚀 ~ Names ~ this.name:", name)

    }


}

const nombres = new Names("Leo")
nombres.getName()