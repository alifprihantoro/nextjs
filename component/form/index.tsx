import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {SignIn} from "../../firebase";
import {FormErrorLogin} from "./error";

type Inputs = {
  email: string,
  password: string,
}

export default function FormLogin() {
  const [ErrLogin, setErrLogin] = useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit = async(e:any)=>{
    setErrLogin('')
    const { email, password } = e
    try{
      await SignIn(email,password)
    }catch(err){
      setErrLogin('email/password salah')
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {ErrLogin !== '' && <span>{ErrLogin}</span>}
      <input type="email" {...register("email", { required: true })} />
      <FormErrorLogin error={errors.email}/>
      <input type="password" {...register("password", { required: true, minLength: 8 })} />
      <FormErrorLogin error={errors.password}/>
      <input type="submit" />
    </form>
  );
}
