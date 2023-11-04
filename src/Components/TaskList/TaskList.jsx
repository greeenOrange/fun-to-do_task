import { useEffect, useState } from "react";
import TaskSection from "../TaskSection/TaskSection";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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

  const handleDragDrop = (res) => {
    const { source, destination, type } = res;
    if (!res) {
        return
    }
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return
    }
    if (type === 'group') {
        const reOrderdTasks = [...tasks];

        const sourceIndex = source.index;
        const destinationIndex = destination.index;
        const [removeTask] = reOrderdTasks.splice(sourceIndex, 1)
        reOrderdTasks.splice(destinationIndex, 0, removeTask);
        return setTasks(reOrderdTasks)
    }
}

  return (
    <>
      <DragDropContext onDragEnd={handleDragDrop}>
        <div>
          <Droppable droppableId="droppable-1" type="group">
            {(provided, snapshot) => (
              <div className="grid grid-cols-3 gap-4" {...provided.droppableProps} ref={provided.innerRef}>
                {stateUses?.map((status, index) => (
                  <div key={index}>
                    <TaskSection index={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} done={done} handleSubmit={handleSubmit} />
                  </div>
                ))}
                {provided.placeholder}
              </div >
            )}
          </Droppable>
        </div >
      </DragDropContext>
    </>
  )
}

export default TaskList