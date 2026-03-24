# 📘 Actividad: Objeto en JavaScript

## 📝 Descripción

En esta actividad se creó un objeto con datos de un usuario y luego se reorganizó en otro objeto utilizando desestructuración y el operador spread.

---

## 💻 Código

```javascript
let entradaUsuario = {
  nombre: "sebastian",
  apellido: "salas",
  email: "sebastian@gmail.com",
  telefono: "3156895466",
  ciudad: "bogota",
  pais: "colombia",
  activo: true
};

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
    ...{ nombre, apellido }
  },
  contacto: {
    ...{ correo, contacto }
  },
  ubicacion: {
    ...{ ciudad, pais }
  },
  activo
};

console.log(usuarioFormateado);
```

---

## 📊 Resultado

Se obtiene un nuevo objeto con la información organizada en:

* 👤 identidad
* 📞 contacto
* 📍 ubicacion
* ✅ activo

---

## 👨‍💻 Autor

Sebastián Salas
