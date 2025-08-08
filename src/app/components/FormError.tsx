import { FC } from "react";

type FormErrorProps = {
  message: string;
};

export const FormError: FC<FormErrorProps> = ({ message }) => {
    
  if(!message){
    return null;
  }
  
  return (<p className="mt-2 px-4 py-2 bg-red-400 text-white rounded-lg text-sm">
  {message}
  </p>
  
  );
};

