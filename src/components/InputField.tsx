import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div className='grid grid-cols-12 gap-2'>
      <label className='col-span-12 text-center text-2xl text-cor4 font-semibold' htmlFor={label}>{label}</label>
      <input className='col-span-12 py-2 px-3 rounded-md border-2 border-cor1'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
      </input>
    </div>
  )
}

export default InputField;