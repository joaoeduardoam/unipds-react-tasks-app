import Link from "next/link";
import FormRegister from "../components/FormRegister";


export default function Register() {


  return (
    <div className="grid gap-y-6 bg-[#fdfcfc] px-8 py-12 rounded-3xl min-w-100">
      
      <h1 className="text-4xl text-center font-bold">Register</h1>

      <FormRegister />

      <Link className="text-center underline" href="/login">I'm already registered</Link>

    </div>
  );
}
