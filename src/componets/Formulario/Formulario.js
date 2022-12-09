import React from "react";
import { useForm } from "react-hook-form";
import './Formulario.css' 

export default function Formulario() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li>
      <label className="Eti">Nombre</label>
      <input type="text" {...register("Nombre",{
        required:true,
        maxLength: 10
      })} />
      </li>

      <label className="Eti">Apellido</label>
      <input type="text"  {...register("Apellido")} />
      
      <label className="Eti">Seleccione el Producto</label>
      <select {...register("Producto")}>
        <option value="Smartphone">Smartphone</option>
        <option value="Smart TV">Smart TV</option>
        <option value="Camaras">Camaras</option>
      </select>
      
      <label className="Eti">Numero de Contacto</label>
      <input type="text"  {...register("Numero de Contacto")} />
      
      <label className="Eti">Email</label>
      <input type="email"  {...register("Email")} />
      
      <label className="Eti">Consulta</label>
      <input type="text"  {...register("Consulta")} />
      
      <input className="button" type="submit" />
      </ul>
    </form>

  );
}