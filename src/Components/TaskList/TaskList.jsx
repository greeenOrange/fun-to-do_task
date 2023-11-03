import { useEffect, useState } from "react";
import TaskSection from "../TaskSection/TaskSection";

const TaskList = ({ tasks, setTasks, handleSubmit }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setProgress] = useState([]);
  const [done, setDone] = useState([]);
  const stateUses = ["todo", "inprogress", "done"];

  useEffect(() => {
    const shortTodo = tasks.filter(task => task.status === "todo");
    const shortInProgress = tasks.filter(task => task.status === "inprogress");
    const shortDone = tasks.filter(task => task.status === "done");
    setTodos(shortTodo)
    setProgress(shortInProgress)
    setDone(shortDone);
  }, [tasks]);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {stateUses?.map((status, index) => (
          <div  key={index}>
            <TaskSection status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} done={done} handleSubmit={handleSubmit} />
          </div>
        ))}
      </div >
    </>
  )
}

export default TaskList