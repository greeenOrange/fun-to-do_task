import { useEffect, useState } from "react";
import TaskManger from "../TaskManger/TaskManger";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [characters, updateCharacters] = useState();

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) {
//         setTasks(savedTasks);
//         console.log(savedTasks);
//     }
// }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <TaskManger tasks={tasks} setTasks={setTasks} />
    </main>
  )
}

export default Home