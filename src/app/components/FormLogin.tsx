'use client';

import { FC, useActionState, useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { FormError } from "./FormError";

type FormLoginProps = {
  action: (_: string, formData: FormData) => Promise<string>
}

export const FormLogin: FC<FormLoginProps> = ({action}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, formAction, isPending] = useActionState(action,"");

  console.log(errorMessage);

  return (
    <>
      {!isPending && <FormError message={errorMessage}/>}
      
      <form className="grid gap-y-4" action={formAction}>


        <FormInput id="email" label="Email" value={email} setValue={setEmail} />

        <FormInput id="password" label="Password" value={password} setValue={setPassword} type="password"/>

        <FormButton>Login</FormButton>

      </form>
    </>  
  );
}
