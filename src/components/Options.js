import React from 'react';
import { toast } from 'react-toastify';

const Options = ({option,correctAnswer}) => {
  const showAnswer=(option)=>{
   if(correctAnswer===option ){
    toast.info('Correct Answer!', { autoClose: 500 })
   }
   else{
    toast.error('Incorrect Answer!', { autoClose: 500 })
   }
  
  }
  
    return (
                <button class="p-2 sm:w-1/2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2  focus:bg-blue-200" onClick={()=>showAnswer(option)}>
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center ">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 " viewBox="0 0 24 24 ">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">{option}</span>
                  </div>
                </button>
                
             
       
    );
};

export default Options;