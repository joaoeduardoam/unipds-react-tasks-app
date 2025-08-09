import { FormLogin } from "@/app/components/FormLogin";
import { COOKIE_OPTIONS } from "@/constants/constants";
import { checkInvalidEmail, checkInvalidPassword } from "@/lib/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const PAGE_TITLE = "Login";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Login() {    

  const handleLogin = async (_: string, formData: FormData) => {
    "use server";


    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();


    if( !email || !password){
      return "Fill all fields!";      

    }

    if(checkInvalidEmail(email)){
      return "Invalid email!";
    }
    if(checkInvalidPassword(password)){
      return "Password must be at least 6 characters long!";
    }


    try{
      const body = {
        email,
        password,
      };

      const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
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
        console.log("Login successfully!", token);

        const cookieStore = await cookies();
        
        cookieStore.set("token", token, COOKIE_OPTIONS);
        
      }
    

    }catch(e){
      console.error("Login error : ", e);

      return "Login error!";
    }    

    redirect("/tasks");

  }

  return (
    <>
      
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>

      <FormLogin action={handleLogin} />

      <Link className="text-center underline" href="/register">I'm not registered</Link>
      
    </>
  );
}
