import React, { useState } from 'react'

export const Paymentmodel = ({isOpen,onClose}:any) => {

    const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    onClose();
  };

  if (!isOpen) return null;



  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Modal Title</h2>
       
      </div>
    </div>  
    </>
  )
}
