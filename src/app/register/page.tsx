import Link from "next/link";
import { FormRegister } from "../components/FormRegister";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Metadata } from "next";


const PAGE_TITLE = "Register";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Register() {
  const handleRegister = async (_: string, formData: FormData) => {
    "use server";


    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();


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
        console.log("User registered successfully!", token);

        const cookieStore = await cookies();
        
        cookieStore.set("token", token, {
          httpOnly: true,
          path: "/",
          secure: true,
          maxAge: 60 * 60 * 24,
        });
        
      }
    

    }catch(e){
      console.error("User register error : ", e);

      return "User register error!";
    }    

    redirect("/tasks");
    
  }


  return (
    <div className="grid gap-y-6 bg-[#fdfcfc] px-8 py-12 rounded-3xl min-w-100">
      
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>

      <FormRegister action={handleRegister}/>

      <Link className="text-center underline" href="/login">I'm already registered</Link>

    </div>
  );
}
