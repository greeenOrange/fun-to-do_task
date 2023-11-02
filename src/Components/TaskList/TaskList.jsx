
const TaskList = ({ tasks, setTasks }) => {
  console.log(tasks);
  return (
    <div className="flex gap-4 justify-between ">
      <div className="flex flex-col">
        <div className="col-span-1 flex items-center justify-between bg-red-500 p-4 rounded w-80">
          <h3 className="text-2xl font-bold flex items-center text-white">To Do<span className="bg-gray-300 ml-2 p-2 rounded text-black">{tasks.length}</span></h3>
          <button className="btn btn-gray-300">+</button>
        </div>
        <ul>

        </ul>
      </div>
      <div className="col-span-1 flex flex items-center justify-between bg-blue-500 p-4 rounded w-80">
        <h3 className="text-2xl font-bold text-white flex items-center">Processing<span className="bg-gray-300 ml-2 p-2 text-black rounded">2</span></h3>
      </div>
      <div className="col-span-1 flex flex items-center justify-between bg-green-500 p-4 rounded w-80">
        <h3 className="text-2xl font-bold text-white flex items-center">Done<span className="bg-gray-300 text-black ml-2 p-2 rounded">1</span></h3>
      </div>
    </div>
  )
}

export default TaskList