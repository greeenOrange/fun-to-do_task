import { useEffect, useState } from "react";
import TaskManger from "./TaskManger/TaskManger"

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        setTasks(savedTasks);
        console.log(savedTasks);
    }
}, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <TaskManger tasks={tasks} setTasks={setTasks} />
    </main>
  )
}

export default Home