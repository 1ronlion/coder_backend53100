//import moment from "moment/moment";

const moment = require('moment')

const date = moment()
const fechaDeNacimiento = moment("1989-06-07", "YYYY-MM-DD")

if(fechaDeNacimiento.isValid()){
    console.log(`Han pasado ${date.diff(fechaDeNacimiento, 'days')} dias`)
}else{
    console.log("Fecha invalida")
}

