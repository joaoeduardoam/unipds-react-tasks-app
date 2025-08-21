import { FormTasks } from "@/app/components/FormTasks";
import { fetchWithToken } from "@/lib/fetchWithToken";
import { Metadata } from "next";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const PAGE_TITLE = "Tasks";

export const metadata: Metadata = {
  title: PAGE_TITLE
};

type TaskType = {
    _id: string,
    userId: string,
    title: string,
    completed: boolean,
    deleted: boolean,
    createDate: string,
    modifyDate: string,
  }


export default async function Tasks() {   
  
  const handleCreateTask = async (_: string, formData: FormData) => {
      "use server";  
  
      const task = formData.get("task")?.toString();  
  
      if( !task){
        return "You need inform the title of the task!";      
  
      }

      try{
        const body = {
          title: task
        };

      const cookieStore = await cookies();              
      const token = cookieStore.get("token")?.value;

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

        if(message){
          return message;
        }
              
        revalidateTag("get-tasks");

        }
      }catch(e){
        console.error("handleCreateTask error : ", e);  
        return "Error creating task!";
      }      
    }


    const cookieStore = await cookies();
                    
      const token = cookieStore.get("token")?.value;
    
      if(!token){
        return null;
      }
    
      const { tasks } = await fetchWithToken(
                `${process.env.BACKEND_URL}/tasks`,
                token,
                {
                  next: { 
                    tags: ["get-tasks"],
                  }
                });


  return (
    <>
      
      <h1 className="text-4xl text-center font-bold">{PAGE_TITLE}</h1>

      <FormTasks action={handleCreateTask}/>

      <ul>
        {tasks.reverse().map((task: TaskType) => (
          <li key={task._id}>
            <span className="font-bold">{task.title}</span>
          </li>
        ))}
      </ul>

      
    </>
  );
}
