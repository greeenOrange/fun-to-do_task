import React from 'react'
import TaskHeader from '../TaskHeader/TaskHeader';
import TaskDND from '../TaskDND/TaskDND';
import toast from 'react-hot-toast';

const TaskSection = ({ status, setTasks, tasks, todos, inProgress, done, handleSubmit }) => {

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

    return (
        <div>
            <TaskHeader text={text} bg={bg} count={taskPriority?.length} handleSubmit={handleSubmit} />
            <div className="flex flex-col gap-4 justify-center items-center">
                {taskPriority?.length > 0 && taskPriority?.map(task =>
                    <TaskDND key={task?.id} task={task} tasks={tasks} setTasks={setTasks} />
                )}
            </div>
        </div>

    )
}

export default TaskSection