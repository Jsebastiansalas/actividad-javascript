let entradaUsuario = {
    nombre: "sebastian",
    apellido: "salas",
    email: "sebastian@gmail.com",
    telefono: "3156895466",
    ciudad: "bogota",
    pais: "colombia",
    activo: true
}
let {
  nombre,
  apellido,
  email: correo,
  telefono: contacto,
  ciudad,
  pais,
  activo
} = entradaUsuario;

let usuarioFormateado = {
    identidad: {
        ...{ nombre,
        apellido}
    },
    contacto: {
        ...{correo,
        contacto}
    },
    ubicacion: {
        ...{ciudad,
        pais}
    },
    activo

}
console.log(usuarioFormateado);
