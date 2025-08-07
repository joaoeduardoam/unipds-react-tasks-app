'use client';

import { useActionState, useState } from "react";


export default function FormRegister({action}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, formAction, isPending] = useActionState(action,"");

  console.log(errorMessage);

  return (
    <>
      {!isPending && errorMessage && 
      <p className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg text-sm">{errorMessage}</p>}
      
      <form className="grid gap-y-4" action={formAction}>

        <div className="grid">
          <label className ="font-bold text-[#7c7c7b]" htmlFor="username">User</label>
          <input className="border-[#e8e9e9] border hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
            shadow-md outline-none text-[#7c7c7b] px-2 py-1 rounded-lg" type="text" name="username"
            id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="grid">
          <label className ="font-bold text-[#7c7c7b]" htmlFor="email">Email</label>
          <input className="border-[#e8e9e9] border hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
            shadow-md outline-none text-[#7c7c7b] px-2 py-1 rounded-lg" type="text" name="email"
            id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>

        <div>
          <label className ="font-bold text-[#7c7c7b]" htmlFor="password">Password</label>
          <div className=" relative flex items-center">
            <input className="w-full border-[#e8e9e9] border hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
              shadow-md outline-none text-[#7c7c7b] px-2 py-1 pr-8 rounded-lg"  name="password"
              id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"} />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-2">👀</button>
          </div>
        </div>


        <button className="bg-[#141516] hover:bg-[rgb(86,90,90)] shadow-md cursor-pointer hover:shadow-none
           text-white py-2 rounded-lg" type="submit">Register</button>

      </form>
    </>  
  );
}
