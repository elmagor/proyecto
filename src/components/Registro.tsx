import React from "react";
import { useForm } from "react-hook-form";


type FormValues = {
  nombre: string;
}

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();


  const enviar = (data) => {
    console.log(data);
  };


  register("nombre", {
     required: {
      value:true,
      message: "asdfasd"}
    
    });


  return (
    <div className="registro">
      <form onSubmit={handleSubmit(enviar)}>
        <label htmlFor="nombre">Nombre: </label>
        
        <input
          defaultValue="test"
          {...register("nombre", { required: true })}
        />
  
        <input type="submit" value="enviar" />

        {errors.nombre && (
          <p className="error">This field is required</p>
        )}


      </form>
    </div>
  );
}

export default Registro;
