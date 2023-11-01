
const Home = () => {
  return (
        <div className="flex flex-col p-4">
      <div className="flex justify-center space-x-4 my-5">
      <input
        type="text"
        className="w-[20rem] border border-gray-300 p-3 rounded-lg"
        placeholder="Type Task..."
      />
      <button className="btn btn-primary">ADD</button>
      </div>

      <div className="flex gap-4 justify-between ">
      <div className="col-span-1 flex flex items-center justify-between bg-red-500 p-4 rounded w-80">
        <h3 className="text-2xl font-bold flex items-center">Heading <span className="bg-gray-300 ml-2 p-2 rounded">5</span></h3>
        <button className="btn btn-gray-300">+</button>
      </div>
      <div className="col-span-1 flex flex items-center justify-between bg-red-500 p-4 rounded w-80">
        <h3 className="text-2xl font-bold flex items-center">Heading <span className="bg-gray-300 ml-2 p-2 rounded">2</span></h3>
      </div>
      <div className="col-span-1 flex flex items-center justify-between bg-red-500 p-4 rounded w-80">
        <h3 className="text-2xl font-bold flex items-center">Heading <span className="bg-gray-300 ml-2 p-2 rounded">1</span></h3>
      </div>
    </div>
    </div>

  )
}

export default Home