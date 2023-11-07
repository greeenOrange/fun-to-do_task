import TaskSection from "../TaskSection/TaskSection";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useLoaderData } from "react-router-dom";

const TaskList = ({ task, tasks, setTasks }) => {

  const stateUses = ["todo", "inprogress", "done"];

  const allTask = useLoaderData();

  const toDo = allTask.filter((task) => task.status === "todo");
  const inProgress = allTask.filter((task) => task.status === "in-progress");
  const done = allTask.filter((task) => task.status === "done");



  return (
    <div className="grid grid-cols-3 gap-4">
      {stateUses?.map((status, index) => (
        <div key={index}>
          <TaskSection index={index} setTasks={setTasks} task={task} status={status} todos={toDo} inProgress={inProgress} done={done} />
        </div>
      ))}
    </div>
  )
}

export default TaskList