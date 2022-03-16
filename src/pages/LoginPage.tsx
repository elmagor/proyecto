import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import {
   NavLink
} from "react-router-dom";

import Logo from "../components/ui/Logo";



type FormValues = {
   nombre: string;
   pass: string;
};

function Singin() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (

      <Fragment>

         <div className="body_sing">
            <div className="container_sing">

               {/*<img src={logo} className="App-logo" alt="logo" />*/}
               <Logo />
               <h1>Sing In</h1>
      
               <form
                  className="caja"
                  onSubmit={handleSubmit(onSubmit)}>


                  <div className="div">
                     <label htmlFor="nombre">Nombre: </label>
                     <input className="input" defaultValue="test"

                        {...register("nombre", {
                           required: {
                              value: true,
                              message: "El campo es requerido"
                           },
                           pattern: {
                              value: /[a-z]/,
                              message: "El formato no es correcto"
                           }
                        })}
                     />
                     {errors.nombre && <Error mensaje={errors.nombre.message} />}
                  </div>


                  <div className="div">
                     <label htmlFor="pass">Contraseña: </label>
                     <input className="input" type={"password"}

                        {...register("pass", {
                           required: {
                              value: true,
                              message: "El campo es requerido"
                           },
                           pattern: {
                              value: /.+/,
                              message: "El formato no es correcto"
                           }
                        })}
                     />
                     {errors.pass && <Error mensaje={errors.pass.message} />}
                  </div>

                  <input type="submit" value="enviar" />

               </form>

               <div className="caja">
                  <p>¿Nuevo en nose?  <NavLink to="/singup">Crea una cuenta </NavLink>
                  </p>
               </div>


            </div> {/* "container_sing" */}
         </div>  {/* "body_sing" */}


      </Fragment>

   );
}


export default Singin;


function Error({ mensaje }) {


   return (
      <>
         <div>
            <span className="error"> {mensaje}</span>
         </div>
      </>

   );
}