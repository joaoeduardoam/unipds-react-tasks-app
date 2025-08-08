import { Dispatch, FC, InputHTMLAttributes, SetStateAction } from "react";

interface FormInpuTextPros extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: Dispatch<SetStateAction<string>>;
}


export const FormInput: FC<FormInpuTextPros> = ({id, label, value, setValue, ...inputProps}) => (


  <div className="grid">

    <label className ="font-bold text-[#7c7c7b]" htmlFor={id}> 
      {label}
    </label>

    <input className="border-[#e8e9e9] border hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
      shadow-md outline-none text-[#7c7c7b] px-2 py-1 rounded-lg" type="text" 
      name={id}
      id={id}
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      {...inputProps}
    />

  </div>

);

