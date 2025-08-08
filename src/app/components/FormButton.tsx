import { PropsWithChildren } from "react";


export const FormButton = ({children}:PropsWithChildren) => (

  <button className="bg-[#141516] hover:bg-[rgb(86,90,90)] shadow-md cursor-pointer hover:shadow-none
                     text-white py-2 rounded-lg" type="submit">
    
    {children}
            
  </button>

);

