import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

//import logo from "../logo.svg";
//const logo: string = require("../logo.svg").default;


type FormValues = {
   nombre: string;
   pass: string;
};

function Singup() {
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

               <h1>Sing Up</h1>

               <form onSubmit={handleSubmit(onSubmit)}>


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

                     <label htmlFor="pass">Elige contraseña: </label>
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
               </div> {/* "container_sing" */}
         </div>  {/* "body_sing" */}



      </Fragment>

   );
}


export default Singup;


function Error({ mensaje }) {


   return (
      <>
         <div>
            <span className="error"> {mensaje}</span>
         </div>
      </>

   );
}