export const URLHabitaciones = import.meta.env. VITE_API_HABITACIONES;

export const crearHabitacion = async (habitacionNueva)=> {
    try {
        const respuesta = await fetch(URLHabitaciones,{
           method: "POST",
           headers: {
            "Content-Type":"application/json"

           },
           body: JSON.stringify(habitacionNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}

export const leerHabitaciones = async () => {
    try {
      const respuesta = await fetch(URLHabitaciones);
      return respuesta;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
