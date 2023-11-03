import React from 'react'

const TaskHeader = ({ text, bg, count, handleSubmit }) => {
  return (
    <div className="flex gap-4 justify-between">
       <div className="flex flex-col"></div>
        <div className={`col-span-1 flex flex items-center justify-between ${bg} p-4 rounded w-80`}>
         <h3 className="text-2xl font-bold text-white flex items-center">{text}<span className="bg-gray-300 ml-2 p-2 text-black rounded">{count}</span></h3>
         {text === "todo" ? <button onClick={handleSubmit} className="btn btn-gray-300">+</button>: null}
       </div>
       </div>
  )
}

export default TaskHeader