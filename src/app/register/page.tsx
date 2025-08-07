import Link from "next/link";
import FormRegister from "../components/FormRegister";
import { redirect } from "next/navigation";


export default function Register() {
  const handleRegister = async (_: string, formData: FormData) => {
    "use server";


    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");


    if(!username || !email || !password){
      return "Fill all fields!";      
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return "Invalid email!";
    }

    if(password.length < 6){
      return "Password must be at least 6 characters long!";
    }


    try{
      const body = {
        username,
        email,
        password,
      };

      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const {token, message} = await res.json();

      if(!token){
        return message;      
      }else{
        // redirect("/tasks");
      }
  

    }catch(e){
      console.error("User register error : ", e);

      return "User register error!";
    }    
    
  }


  return (
    <div className="grid gap-y-6 bg-[#fdfcfc] px-8 py-12 rounded-3xl min-w-100">
      
      <h1 className="text-4xl text-center font-bold">Register</h1>

      <FormRegister action={handleRegister}/>

      <Link className="text-center underline" href="/login">I'm already registered</Link>

    </div>
  );
}
