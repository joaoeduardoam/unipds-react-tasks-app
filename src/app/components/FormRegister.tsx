'use client';

import { FC, useActionState, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { FormError } from "./FormError";

type FormRegisterProps = {
  action: (_: string, formData: FormData) => Promise<string>
}

export const FormRegister: FC<FormRegisterProps> = ({action}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, formAction, isPending] = useActionState(action,"");

  console.log(errorMessage);

  return (
    <>
      {!isPending && <FormError message={errorMessage}/>}
      
      <form className="grid gap-y-4" action={formAction}>


        <FormInput id="username" label="User" value={username} setValue={setUsername} />

        <FormInput id="email" label="Email" value={email} setValue={setEmail} />

        <FormInput id="password" label="Password" value={password} setValue={setPassword} type="password"/>

        <FormButton>Register</FormButton>

      </form>
    </>  
  );
}
