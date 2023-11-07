import TaskHeader from '../TaskHeader/TaskHeader';
import TaskDND from '../TaskDND/TaskDND';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { useDrop } from 'react-dnd';

const TaskSection = ({ status, task, tasks, setTasks, index, todos, inProgress, done, handleSubmit }) => {
console.log(tasks);
    const allTask = useLoaderData();

    let text = "todo";
    let bg = "bg-red-500";
    let taskPriority = todos

    if (status === "inprogress") {
        text = "In Progress";
        bg = "bg-blue-500";
        taskPriority = inProgress
    }
    if (status === "done") {
        text = "done";
        bg = "bg-green-500";
        taskPriority = done
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id), // Change 'item?._id' to 'item.id'
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    
      const addItemToSection = (id) => {
        if (id === undefined) {
          console.log('ID is undefined');
          return;
        }
    
        const updatedTasks = allTask.map((t) => {
          if (t._id === id) {
            return { ...t, status: status };
          }
          return t;
        });
    
        setTasks(updatedTasks);
      }     


    return (
        <div ref={drop}>
            <div className={`p-4 ${isOver ? "bg-grey-500" : null}`}>
                <TaskHeader text={text} bg={bg} count={allTask?.length} handleSubmit={handleSubmit} />
                <div className="flex flex-col gap-4 justify-center items-center">
                        {taskPriority?.length > 0 && taskPriority?.map((task, index) =>
                            <TaskDND key={task?._id}
                                task={task}
                                index={index}
                            />
                        )}

                </div>
            </div>
        </div>
    )
}

export default TaskSection