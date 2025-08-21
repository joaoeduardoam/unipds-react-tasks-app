'use client';

import { FC, use, useActionState, useEffect, useState } from "react";
import { FormError } from "./FormError";

type FormTasksProps = {
  action: (_: string, formData: FormData) => Promise<string>
}

export const FormTasks: FC<FormTasksProps> = ({action}) => {

  const [task, setTask] = useState('');

  const [errorMessage, formAction, isPending] = useActionState(action,"");

  console.log(errorMessage);

  useEffect(() => {
    if(!errorMessage && !isPending){
      setTask('');
    }
  }, [errorMessage, isPending]);

  
  return (
    <>
      {!isPending && <FormError message={errorMessage}/>}
      
      <form className ="relative shadow-lg rounded-lg" action={formAction}>


        <input className="px-2 py-1 w-full pr-10 border-[#e8e9e9] border hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
          shadow-md outline-none text-[#7c7c7b] rounded-lg"
          type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} 
          placeholder="Inform the task"
        />

        <button className=" absolute top-0 right-0 bottom-0 py-1 px-3 rounded-r-lg bg-[#141516] hover:bg-[rgb(86,90,90)] shadow-md cursor-pointer 
          hover:shadow-none text-white ">+</button>


      </form>
    </>  
  );
}
