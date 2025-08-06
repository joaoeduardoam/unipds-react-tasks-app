import Link from "next/link";


export default function Home() {
  return (
    <div className="grid gap-y-4">
      
      <h1 className="text-4xl">Welcome!!</h1>

      <div>

        <p className="font-bold">Availables links:</p>

        <ul className="list-disc ml-6 underline">
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/tasks">Tasks</Link></li>
        </ul>

      </div>

    </div>
  );
}
