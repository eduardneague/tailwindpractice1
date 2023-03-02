import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './css_files/App.css'
import './css_files/reset.css'

function App() {
  return (
    <div className = "bg-gray-600 h-screen w-screen flex justify-center items-center">

      <div className="bg-gray-100 w-[40rem] aspect-square flex justify-between rounded-3xl shadow-lg flex-col">

        <div className="w-full h-1/5 bg-gray-200 flex justify-start items-center rounded-tr-3xl rounded-tl-3xl">
          <h1 className="pl-10 text-gray-700 text-3xl font-medium tracking-normal">Edu's Tailwind Practice #1</h1>
        </div>

        <div className="w-full h-1/2 flex flex-col items-center gap-10">
            <div className="w-full h-20 flex justify-between items-center border-solid border-gray-300 border-b">
              <div className = "ml-16 bg-orange-500 text-white font-bold tracking-wide w-40 h-10 rounded-full flex justify-center items-center">UNDER REVIEW</div>
              <h1 className = "font-bold mr-16 text-gray-700">May 14, 1988</h1>
            </div>

            <div className = "w-4/5 h-32 bg-gray-200 rounded-lg shadow flex justify-start items-center">
                <p className = "text-gray-700 text-2xl ml-5 font-medium">Here is a quick comment about this person, maybe you will like it!</p>
            </div>
        </div>

        <div className="w-full h-1/4 bg-gray-200 rounded-br-3xl rounded-bl-3xl flex flex-col items-center justify-center">
          <p className="ml-16 self-start mt-5 font-bold text-gray-700 tracking-wide text-md">EMPLOYEE</p>
          <div className="w-4/5 h-32 mb-6 flex items-center">
                <div className="circle rounded-full bg-blue-600 w-20 h-20 flex justify-center items-center text-white font-bold text-2xl">VG</div>
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <p className="ml-5 text-gray-900 font-bold text-2xl">Victor Gonzalez</p>
                    <p className="ml-5 text-gray-600 font-medioum text-2xl mb-2">Instructor</p>
                </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
