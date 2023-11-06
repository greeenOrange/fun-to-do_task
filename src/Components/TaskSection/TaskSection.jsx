import TaskHeader from '../TaskHeader/TaskHeader';
import TaskDND from '../TaskDND/TaskDND';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const TaskSection = ({ status, setTasks, tasks, index, todos, inProgress, done, handleSubmit }) => {

    const allTask = useLoaderData()
    console.log(allTask);

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

    const addItemToTaskSection = (id) => {
        setTasks((prev) => {
            const updatedTasks = prev.map(t => {
                if (t.id === id) {
                    return { ...t, status: status }
                } else {
                    return t
                }
            })
            if (JSON.stringify(prev) === JSON.stringify(updatedTasks)) {
                toast.error('No status changed.');
            } else {
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                toast.success('Successfully task status changed.');
            }
            return updatedTasks
        })
    }

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

            <TaskHeader text={text} bg={bg} count={allTask?.length} handleSubmit={handleSubmit} />
            <div className="flex flex-col gap-4 justify-center items-center">
                {allTask?.length > 0 && allTask?.map((task, index) =>
                    <TaskDND key={task?.id} task={task}
                        tasks={tasks} setTasks={setTasks}
                        index={index}
                    />

                )}
            </div>
        </>

    )
}

export default TaskSection