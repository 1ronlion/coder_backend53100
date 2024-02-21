class TicketManager{

  #precioBaseDeGanancia = 0.25;

  constructor(){

    this.eventos = []

  }

  getEventos = () => this.eventos;
  
  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString()) {
  
    const evento = {
      id: this.generarId(),
      nombre: nombre,
      lugar: lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad: capacidad,
      fecha: fecha,
      participantes: [],
    };
  
    return this.eventos.push(evento);
  }
  
  generarId() {
    let id = 0;
  
    if (this.eventos.length === 0) {
      id = 1;
    } else {
      id = this.eventos[this.eventos.length - 1].id + 1;
    }
  
    return id;
  }
  
  agregarUsuario(eventoID, usuarioID) {
    const evento = this.eventos.findIndex((evento) => evento.id === eventoID);
    if (evento === -1) {
      console.log("Evento no existente");
    }
  
    const usuario = this.eventos[evento].participantes.includes(usuarioID);
    if (usuario) {
      console.log("Usuario ya registrado");
    }else{

      return this.eventos[evento].participantes.push(usuarioID);

    }
  
  }
  
  ponerEventoEnGira(eventoID, nuevaLocalidad, nuevaFecha) {
    const evento = this.eventos.find((evento) => evento.id === eventoID);
    if (evento === -1) {
      console.log("Evento no existente");
    }
  
    const nuevoEvento = {
      ...evento,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: [],
    };
  
    return this.eventos.push(nuevoEvento);
  }
}



const manejadorDeEventos = new TicketManager()
manejadorDeEventos.agregarEvento("Evento afterclass", "Argentina", 3000)
manejadorDeEventos.agregarUsuario(1, 14)
manejadorDeEventos.agregarUsuario(1, 14)
const result = manejadorDeEventos.getEventos()
console.log("🚀 ~ result:", result)

