export const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
export const URLHabitaciones = import.meta.env.VITE_API_HABITACIONES;
export const URLReservas = import.meta.env.VITE_API_RESERVAS;

export const crearUsuario = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuarios);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerUsuarios = async (id) => {
  try {
    const respuesta = await fetch(`${URLUsuarios}/usuarios/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarUsuario = async (usuarioEditado, id) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioEditado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarusuario = async (id) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearHabitacion = async (habitacionNueva) => {
  try {
    const respuestaHabitacion = await fetch(URLHabitaciones, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacionNueva),
    });
    return respuestaHabitacion;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const leerHabitaciones = async () => {
  try {
    const respuesta = await fetch(URLHabitaciones);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarHabitacion = async (id) => {
  try {
    const respuestaHabitacion = await fetch(URLHabitaciones + "/" + id, {
      method: "DELETE",
    });
    return respuestaHabitacion;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerHabitacion = async (id) => {
  try {
    const respuesta = await fetch(URLHabitaciones + "/" + id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarHabitacion = async (habitacionEditada, id) => {
  try {
    const respuestaHabitacion = await fetch(URLHabitaciones + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacionEditada),
    });
    return respuestaHabitacion;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const mostrarReserva = async () => {
  try {
    const respuesta = await fetch(URLReservas);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearReserva = async (Reservanueva) => {
  try {
    const respuesta = await fetch(URLReservas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Reservanueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const Reserva = async (id) => {
  try {
    const respuesta = await fetch(`${URLHabitaciones}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reserva: true }),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ReservaCancelada = async (id) => {
  try {
    const respuesta = await fetch(`${URLHabitaciones}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reserva: false }),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//cuando tengamos el backend con un login enviar solicitud POST
const userAdmin = {
  email: "admin@hotel.com",
  password: "hotelAdmin123",
  role: "admin",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "hotel",
      JSON.stringify({ email: usuario.email, role: userAdmin.role })
    );
    return true;
  } else {
    return false;
  }
};

//nuevo login usando el backend
export const loginback = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/", {
      // Asegúrate de que la URL es correcta, debes incluir el endpoint de login
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      uid: datos.uid,
      token: datos.token,
      rol: datos.roll,
    };
  } catch (error) {
    console.error(error);
    return { error: "Error en el login" };
  }
};
