import { useEffect, useState } from "react";
import TaskManger from "../TaskManger/TaskManger";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
const Home = () => {
  const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) {
//         setTasks(savedTasks);
//         console.log(savedTasks);
//     }
// }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <DndProvider backend={HTML5Backend}>
      <TaskManger tasks={tasks} setTasks={setTasks} />
      </DndProvider>
    </main>
  )
}

export default Home