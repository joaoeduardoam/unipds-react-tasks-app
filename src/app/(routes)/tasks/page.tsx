import { FormTasks } from "@/app/components/FormTasks";
import { fetchWithToken } from "@/lib/fetchWithToken";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { title } from "process";

const PAGE_TITLE = "Tasks";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Tasks() {   
  
  const handleCreateTask = async (_: string, formData: FormData) => {
      "use server";
  
  
      const task = formData.get("task")?.toString();
  
  
      // if( !task){
      //   return "You need inform the title of the task!";      
  
      // }

      try{
        const body = {
          title: task
        };

      const cookieStore = await cookies();
              
      const token = cookieStore.get("token")?.value;

      console.log("tokenTASKS: ", token);

      if(!token){
        return "Token not found!";
      }else{
        
        const {message} = await fetchWithToken(
          `${process.env.BACKEND_URL}/tasks`,
          token,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
          }
        });
        
      
        return message;
        }
      }catch(e){
        console.error("handleCreateTask error : ", e);
  
        return "Error creating task!";
      }    
  
      
  
    }


  return (
    <>
      
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>

      <FormTasks action={handleCreateTask}/>

      
    </>
  );
}
