let entradaUsuario = {
    nombre: "sebastian",
    apellido: "salas",
    telefeno: "3156895466",
    ciudad: "bogota",
    pais: "colombia",
    activo: true
}
let {
    email: correo,
    telefono: contacto
} = entradaUsuario;
let usuarioFormateado = {
    identidad: {
        ...{nombre,
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

